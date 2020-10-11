import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import './create-video.css';

import { withAuthAdmin } from '../../infrastructore/hocs';
import { createVideoAction } from '../../actions/videoActions';

import Valid from '../../infrastructore/valid';
import text from '../../infrastructore/textDescription';

const BASE_URL = "https://www.youtube.com/embed/";

class VideoCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            model: '',
        }
    }

    componentDidMount() {
        toastr.success(text['videoCreate']);
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();

        try {
            let errs = Valid.filldsAreRequired({ model: this.state.model, url: this.state.url });
            if (errs) return toastr.error(`${errs} is required!`);

            let err = await Valid.video(this.state.model, this.state.url);
            if (err) return toastr.error(err);

            let url = BASE_URL + this.state.url.split('=')[1];

            await this.props.createVideo({ url, model: this.state.model }, 'video');

            if (this.props.isCreated) {
                toastr.success('Video was created!');
                this.props.history.push('/video');
            }

        } catch (e) {
            console.log(e);
            toastr.error('Something went wrong during Create Video!');
        }
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    render() {
        return (
            <div id="create-video">
                <form onSubmit={this.handleSubmit} class="video text-center border border-light p-5">
                    <h1>Add a Video to Data Base!</h1>
                    <div class="form-group">
                        <label for="title">Video Model</label>
                        <input 
                            onChange={this.handleChange} 
                            name="model" type="text" 
                            class="form-control" 
                            placeholder="enter model" />
                    </div>
                    <div class="form-group">
                        <label for="videoUrl">Video Url</label>
                        <input 
                            onChange={this.handleChange} 
                            name="url" 
                            type="text" 
                            class="form-control" 
                            placeholder="Video Url" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

VideoCreate = withAuthAdmin(VideoCreate);

function mapDispatchToProps(dispatch) {
    return {
        createVideo: (data, collection) => dispatch(createVideoAction(data, collection))
    }
}

function mapStateToProps(state) {
    return {
        isCreated: state.createVideo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCreate);