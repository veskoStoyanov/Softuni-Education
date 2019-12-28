import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import '../../../style/bot.css';

import {DeleteVideoBtn} from '../../';

import {editItem} from '../../../infrastructore/remote';
import {withAuthLogged} from '../../../infrastructore/hocs';
import {fetchVideoDetailsAction} from '../../../actions/videoActions';

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
            return (<div className="bot">
                <div>
                    <iframe width="420" height="315" title="hi" src={this.state.url}> </iframe>
                    <h3 className="text-center">{this.state.model}</h3>

                    {this.state.isAdmin ? <DeleteVideoBtn id={this.props.match.params.id} history={this.props.history} /> : null}
                    <Link to={url} ><button className="btn btn-secondary">Comments</button></Link>
                </div>
            </div>)
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


