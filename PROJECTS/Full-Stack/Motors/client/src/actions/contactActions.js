import { FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_DETAILS_SUCCESS, CREATE_CONTACTS_SUCCESS, DELETE_CONTACTS_SUCCESS }
    from './actionTypes';
import { beginAjax, endAjax } from './ajaxStatusActions'
import { fetchItems, fetchOne, createProduct, deleteItem } from '../infrastructore/remote';
import toastr from 'toastr'

function fetchContactsSuccess(data) {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        data
    }
}

function fetchContactDetailsSuccess(data) {
    return {
        type: FETCH_CONTACTS_DETAILS_SUCCESS,
        data
    }
}

function createContactSuccess(data) {
    return {
        type: CREATE_CONTACTS_SUCCESS,
        data
    }
}

function deleteContactSuccess(id) {
    return {
        type: DELETE_CONTACTS_SUCCESS,
        id
    }
}

export function deleteContactAction(id, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return deleteItem(id, collection)
            .then(json => {
                if (json.success) {
                    dispatch(deleteContactSuccess(id))
                } else {
                    console.log('err');
                }
                dispatch(endAjax())
            })
    }
}

export function createContactAction(data, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return createProduct(data, collection)
            .then(json => {
                if (json.success) {
                    dispatch(createContactSuccess(json.contact))
                } else {
                    if (json.error) {
                        toastr.error(json.error)

                    }
                    console.log('err');

                }
                dispatch(endAjax())
            })
    }
}

export function fetchContactAction(collection) {
    return async (dispatch) => {
        dispatch(beginAjax())
        const data = await fetchItems(collection)
        dispatch(fetchContactsSuccess(data))
        dispatch(endAjax())
    }
}

export function fetchContactDetailsAction(id, collection) {
    return async (dispatch) => {
        dispatch(beginAjax())
        const data = await fetchOne(id, collection)
        dispatch(fetchContactDetailsSuccess(data))
        dispatch(endAjax())
    }
}
