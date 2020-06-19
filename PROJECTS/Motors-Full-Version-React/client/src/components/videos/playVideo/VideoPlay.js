import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { DeleteVideoBtn } from '../../';
import { editItem } from '../../../infrastructore/remote';

import './play-video.css';

import { withAuthLogged } from '../../../infrastructore/hocs';
import { fetchVideoDetailsAction } from '../../../actions/videoActions';

class VideoPlay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            model: null,
            id: null,
            ready: false,
            isAdmin: sessionStorage.getItem('username') === 'Admin'
        }
    }

    componentDidMount = async () => {
        try {
            await this.props.videoDetails(this.props.match.params.id, 'video');

            const video = this.props.data;

            if (!this.state.isAdmin) {
                await editItem({}, video._id, `video`)
            }

            this.setState({
                url: video.url,
                model: video.model,
                id: video._id,
                ready: true
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let url = '/comments/' + this.state.id;

        if (this.state.ready) {
            return (
                <div id="play-video">
                    <div className="container">
                        <ul className="list-group">
                            <h3 className="mb-1 text-center">{this.state.model}</h3>
                            <div className=" div embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={this.state.url} title="myVideo"> </iframe>
                            </div>
                        </ul >
                        <div className="buttons">
                            <Link to={url} className="btn btn-outline-danger a-btn">
                                Comments
                            </Link>
                            {this.state.isAdmin ? <DeleteVideoBtn 
                                id={this.props.match.params.id} 
                                history={this.props.history} /> : null}
                        </div>
                    </div >
                </div>
            )
        }
        
        return (<h1>Loading...</h1>)
    }
}

VideoPlay = withAuthLogged(VideoPlay);

function mapDispatchToProps(dispatch) {
    return {
        videoDetails: (id, collection) => dispatch(fetchVideoDetailsAction(id, collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.videoDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlay);


