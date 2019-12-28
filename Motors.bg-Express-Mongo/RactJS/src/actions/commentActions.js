import { FETCH_COMMENT_SUCCESS, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_SUCCESS } from './actionTypes';
import { beginAjax, endAjax } from './ajaxStatusActions'
import { fetchItems, createProduct, deleteItem } from '../infrastructore/remote';

function fetchCommentSuccess(data) {
    return {
        type: FETCH_COMMENT_SUCCESS,
        data
    }
}

function createCommentSuccess(data) {
    return {
        type: CREATE_COMMENT_SUCCESS,
        data
    }
}

function deleteCommentSuccess(id) {
    return {
        type: DELETE_COMMENT_SUCCESS,
        id
    }
}

export function deleteCommentAction(id, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return deleteItem(id, collection)
            .then(json => {
                if (json.success) {
                    dispatch(deleteCommentSuccess(id))
                } else {
                    console.log('err');
                }
                dispatch(endAjax())
            })
    }
}

export function createCommentAction(data, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return createProduct(data, collection)
            .then(json => {
                if (json.success) {
                    dispatch(createCommentSuccess(json.comment))
                } else {
                    console.log('err');

                }
                dispatch(endAjax())
            })
    }
}

export function fetchCommentAction(collection) {
    return async (dispatch) => {
        dispatch(beginAjax())
        const data = await fetchItems(collection)
        dispatch(fetchCommentSuccess(data))
        dispatch(endAjax())
    }
}

