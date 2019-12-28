import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { withAuthAdmin } from '../../infrastructore/hocs';
import { createVideoAction } from '../../actions/videoActions';
import Valid from '../../infrastructore/valid';

const BASE_URL = "https://www.youtube.com/embed/";

class VideoCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            model: '',
        }
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
            toastr.error('Something went wrong with Create Video!');
        }
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    render() {

        return (<div>
            <h1>Create Video</h1>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label><strong>Model</strong></label>
                    <input onChange={this.handleChange} name='model' type="text" />
                    <label><strong>Video URL</strong></label>
                    <input onChange={this.handleChange} name='url' type="text" />
                    <input type="submit" value="Create" />
                </form>
            </div>
        </div>)
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