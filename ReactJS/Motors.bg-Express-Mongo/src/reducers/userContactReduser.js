import { FETCH_USER_CONTACTS_SUCCESS, FETCH_USER_CONTACTS_DETAILS_SUCCESS, EDIT_USER_CONTACTS_SUCCESS } from '../actions/actionTypes';

export function userContactReducer(state = [], action) {
    switch (action.type) {
        case FETCH_USER_CONTACTS_SUCCESS:
            return reconcile(state, action.data)
        case EDIT_USER_CONTACTS_SUCCESS:
            return reconcile(state, [action.data])
       
        default:
            return state
    }
}


export function editUserContactReducer(state = { success: false }, action) {
    switch (action.type) {
        case EDIT_USER_CONTACTS_SUCCESS:
            return Object.assign({}, state, { success: true })
        default:
            return state
    }
}

export function userContactDetailsReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_USER_CONTACTS_DETAILS_SUCCESS:
            return action.data
        default:
            return state
    }
}

function reconcile(oldData, newData) {
    const newDataById = {}
    for (const entry of newData) {
        newDataById[entry._id] = entry
    }

    const result = []
    for (const entry of oldData) {
        if (newDataById[entry._id]) {
            result.push(newDataById[entry._id])
            delete newDataById[entry._id]
        } else {
            result.push(entry)
        }
    }

    for (const entryId in newDataById) {
        result.push(newDataById[entryId])
    }

    return result
}
