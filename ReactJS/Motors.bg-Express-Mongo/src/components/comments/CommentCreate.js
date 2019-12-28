import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import toastr from 'toastr'

import Auth from '../../infrastructore/auth';
import {createCommentAction} from '../../actions/commentActions';

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

    return (<div className="post post-content">
        <form onSubmit={handleSubmit} id="commentForm">
            <label>Comment</label>
            <textarea id='input' onChange={(e) => setContent(e.target.value)} value={content} type="text"></textarea>
            <input type="submit" value="Add Comment" id="btnPostComment" />
        </form>
    </div>)
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

