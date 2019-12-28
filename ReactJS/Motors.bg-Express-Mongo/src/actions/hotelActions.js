import { FETCH_HOTELS_SUCCESS, DELETE_HOTEL_SUCCESS, C_H_SUCCESS, EDIT_HOTEL_SUCCESS } from './actionTypes';
import { beginAjax, endAjax } from './ajaxStatusActions'
import { fetchItems, createProduct, deleteItem, editItem } from '../infrastructore/remote';

function fetchHotelsSuccess(data) {
    return {
        type: FETCH_HOTELS_SUCCESS,
        data
    }
}


function createHotelSuccess(data) {
    return {
        type: C_H_SUCCESS,
        data
    }
}

function deleteHotelSuccess(id) {
    return {
        type: DELETE_HOTEL_SUCCESS,
        id
    }
}

function editHotelSuccess(data) {
    return {
        type: EDIT_HOTEL_SUCCESS,
        data
    }
}


export function editHotelAction(data, id, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return editItem(data, id, collection)
            .then(json => {
                if (json.success) {
                    dispatch(editHotelSuccess(json.hotel))
                } else {
                    console.log('err');

                }
                dispatch(endAjax())
            })
    }
}

export function deleteHotelAction(id, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return deleteItem(id, collection)
            .then(json => {
                if (json.success) {
                    dispatch(deleteHotelSuccess(id))
                } else {
                    console.log('err');

                }
                dispatch(endAjax())
            })
    }
}

export function createHotelAction(data, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return createProduct(data, collection)
            .then(json => {
                if (json.success) {
                    dispatch(createHotelSuccess(json.hotel))
                } else {
                    console.log('err');

                }
                dispatch(endAjax())
            })
    }
}

export function fetchHotelAction(collection) {
    return async (dispatch) => {
        dispatch(beginAjax())
        const data = await fetchItems(collection)
        dispatch(fetchHotelsSuccess(data))
        dispatch(endAjax())
    }
}

