import { FETCH_USER_CONTACTS_SUCCESS, FETCH_USER_CONTACTS_DETAILS_SUCCESS, EDIT_USER_CONTACTS_SUCCESS } from './actionTypes';
import { beginAjax, endAjax } from './ajaxStatusActions'
import { fetchItems, fetchOne, editItem } from '../infrastructore/remote';

function fetchUserContactsSuccess(data) {
    return {
        type: FETCH_USER_CONTACTS_SUCCESS,
        data
    }
}

function fetchUserContactDetailsSuccess(data) {
    return {
        type: FETCH_USER_CONTACTS_DETAILS_SUCCESS,
        data
    }
}

function editUserContactDetailsSuccess(data) {
    return {
        type: EDIT_USER_CONTACTS_SUCCESS,
        data
    }
}

export function editUserContactAction(data, id, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return editItem(data, id, collection)
            .then(json => {
                if (json.success) {
                    dispatch(editUserContactDetailsSuccess(json.contact))
                } else {
                    console.log('err');

                }
                dispatch(endAjax())
            })
    }
}

export function fetchUserContactAction(collection) {
    return async (dispatch) => {
        dispatch(beginAjax())
        const data = await fetchItems(collection)
        dispatch(fetchUserContactsSuccess(data))
        dispatch(endAjax())
    }
}

export function fetchUserContactDetailsAction(id, collection) {
    return async (dispatch) => {
        dispatch(beginAjax())
        const data = await fetchOne(id, collection)
        dispatch(fetchUserContactDetailsSuccess(data))
        dispatch(endAjax())
    }
}
