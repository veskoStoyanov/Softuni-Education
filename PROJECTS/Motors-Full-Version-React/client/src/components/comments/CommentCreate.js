import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toastr from 'toastr'

import { createCommentAction } from '../../actions/commentActions';

import Auth from '../../infrastructore/auth';

const CommentCreate = (props) => {
    const [content, setContent] = useState('');

    async function handleSubmit(ev) {
        ev.preventDefault();

        let data = {
            content,
            videoId: props.id,
            userName: Auth.getUsername()
        }
        
        setContent('')

        try {
            if (content.trim() === '')
                return toastr.error('Text is required!')

            await props.createComment(data, 'comment')

            props.getComments();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div id="create-comment">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label className="title" htmlFor="exampleTextarea"><h2>Comment</h2></label>
                    <textarea
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        class="form-control"
                        id="exampleTextarea"
                        rows="3">
                    </textarea>
                </div>
                <input
                    className="btn btn-outline-danger a-btn create-comment-btn"
                    type="submit"
                    value="Add Comment"
                    id="btnDelMoto" />
            </form>
        </div>
    )
}

CommentCreate.propTypes = {
    id: PropTypes.string,
    getComments: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
    return {
        createComment: (data, collection) => dispatch(createCommentAction(data, collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.createComment.comments
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreate);

