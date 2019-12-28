import { FETCH_MOTORS_SUCCESS, FETCH_MOTO_DETAILS_SUCCESS, CREATE_MOTOR_SUCCESS, DELETE_MOTOR_SUCCESS, EDIT_MOTOR_SUCCESS } from './actionTypes';
import { beginAjax, endAjax } from './ajaxStatusActions'
import { fetchItems, fetchOne, createProduct, deleteItem, editItem } from '../infrastructore/remote';

function fetchMotorSuccess(data) {
    return {
        type: FETCH_MOTORS_SUCCESS,
        data
    }
}

function fetchMotorDetailsSuccess(data) {
    return {
        type: FETCH_MOTO_DETAILS_SUCCESS,
        data
    }
}

function createMotorSuccess(data) {
    return {
        type: CREATE_MOTOR_SUCCESS,
        data
    }
}

function deleteMotorSuccess(id) {
    return {
        type: DELETE_MOTOR_SUCCESS,
        id
    }
}

function editSuccess(data) {
    return {
        type: EDIT_MOTOR_SUCCESS,
        data
    }
}


export function editMotorAction(data, id, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return editItem(data, id, collection)
            .then(json => {
                if (json.success) {
                    dispatch(editSuccess(json.motor))
                } else {
                    console.log('err');

                }
                dispatch(endAjax())
            })
    }
}

export function deleteMotorAction(id, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return deleteItem(id, collection)
            .then(json => {
                if (json.success) {
                    dispatch(deleteMotorSuccess(id))
                } else {
                    console.log('err');

                }
                dispatch(endAjax())
            })
    }
}

export function createMotorAction(data, collection) {
    return (dispatch) => {
        dispatch(beginAjax())
        return createProduct(data, collection)
            .then(json => {
                if (json.success) {
                    dispatch(createMotorSuccess(json.motor))
                } else {
                    console.log('err');

                }
                dispatch(endAjax())
            })
    }
}

export function fetchMotorAction(collection) {
    return async (dispatch) => {
        dispatch(beginAjax())
        const data = await fetchItems(collection)
        dispatch(fetchMotorSuccess(data))
        dispatch(endAjax())
    }
}

export function fetchMotorDetailsAction(id, collection) {
    return async (dispatch) => {
        dispatch(beginAjax())
        const data = await fetchOne(id, collection)
        dispatch(fetchMotorDetailsSuccess(data))
        dispatch(endAjax())
    }
}
