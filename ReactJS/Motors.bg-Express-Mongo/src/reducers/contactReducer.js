import { FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_DETAILS_SUCCESS, CREATE_CONTACTS_SUCCESS, DELETE_CONTACTS_SUCCESS } from '../actions/actionTypes';

export function contactReducer(state = [], action) {
    switch (action.type) {
        case FETCH_CONTACTS_SUCCESS:
            return reconcile(state, action.data)
        case CREATE_CONTACTS_SUCCESS:
            return reconcile(state, [action.data])
        case DELETE_CONTACTS_SUCCESS:
            return state.filter(e => e._id !== action.id)
        default:
            return state
    }
}

export function deleteContactReducer(state = { success: false }, action) {
    switch (action.type) {
        case DELETE_CONTACTS_SUCCESS:
            return Object.assign({}, state, { success: true })
        default:
            return state
    }
}

export function createContactReducer(state = { success: false }, action) {
    switch (action.type) {
        case CREATE_CONTACTS_SUCCESS:
            return Object.assign({}, state, { success: true })
        default:
            return state
    }
}

export function contactDetailsReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_CONTACTS_DETAILS_SUCCESS:
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
