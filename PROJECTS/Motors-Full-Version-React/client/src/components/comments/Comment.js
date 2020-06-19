import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';

import './comments.css';

import Auth from '../../infrastructore/auth';
import { deleteCommentAction } from '../../actions/commentActions';

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

    let deleteBtn = (<button type="submit" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>);
    let isAdminOrCreator = Auth.isUserAdmin() || Auth.getUsername() === props.author

    return (
        <div id="comment">
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body">
                    {props.content}
                </div>
                <div class="toast-header">
                    <strong class="mr-auto"></strong>
                    <small>submitted by {props.author}</small>
                    <form onSubmit={removeComment}>
                        {isAdminOrCreator ? deleteBtn : null}
                    </form>
                </div>
            </div>
        </div>
    )
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