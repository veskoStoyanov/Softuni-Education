import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr'

import Auth from '../../infrastructore/auth';
import {deleteCommentAction} from '../../actions/commentActions';

const Comment = (props) => {

    async function removeComment(ev) {
        ev.preventDefault();

        try {
            await props.deleteComment(props._id, 'comment');
            toastr.success("The comment has been deleted successfuly!")
            props.getComments();

        } catch (e) {
            console.log(e);
        }
    }

    let deleteBtn = (<input type="submit" value="delete" />);
    let isAdminOrCreator = Auth.isUserAdmin() || Auth.getUsername() === props.author

    return (<article className="post post-content">
        <p>{props.content}</p>
        <div className="info">
            <form onSubmit={removeComment}>
                <strong>submitted by {props.author}</strong>
                {isAdminOrCreator ? deleteBtn : null}
            </form>
        </div>
    </article>)
}

Comment.propTypes = {
    _id: PropTypes.string,
    getComments: PropTypes.func,
    author: PropTypes.string,
    content: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
    return {
        deleteComment: (id, collection) => dispatch(deleteCommentAction(id, collection))
    }
}

function mapStateToProps(state) {
    return {
        isDeleted: state.deteleComment.success
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);