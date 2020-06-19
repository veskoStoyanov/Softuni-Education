import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { Comment, CommentCreate } from '../';

import './comments.css';

import { withAuthLogged } from '../../infrastructore/hocs';
import { fetchCommentAction } from '../../actions/commentActions';

import text from '../../infrastructore/textDescription';

class CommentPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
        };
    }

    getComments = async () => {
        toastr.success(text['comments']);
        try {
            await this.props.getComments(`comment/${this.props.match.params.id}`)

            let filtredComments = this.props.data.filter(any => any.videoId.toString() === this.props.match.params.id)

            this.setState({
                comments: filtredComments,
            });
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount = () => this.getComments();

    render() {
        return (
            <div id="commets">
                <section id="viewComments">
                    <CommentCreate id={this.props.match.params.id} getComments={this.getComments} />
                    {this.state.comments.map(c => <Comment key={c._id} {...c} getComments={this.getComments} />)}
                </section>
            </div>
        )
    }
}

CommentPost = withAuthLogged(CommentPost)

function mapDispatchToProps(dispatch) {
    return {
        getComments: (collection) => dispatch(fetchCommentAction(collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.comments
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentPost);