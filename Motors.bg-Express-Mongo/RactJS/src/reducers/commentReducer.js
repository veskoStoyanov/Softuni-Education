import { FETCH_COMMENT_SUCCESS, DELETE_COMMENT_SUCCESS, CREATE_COMMENT_SUCCESS } from '../actions/actionTypes';

export function commentReducer(state = [], action) {
    switch (action.type) {
        case FETCH_COMMENT_SUCCESS:
            return reconcile(state, action.data)
        case CREATE_COMMENT_SUCCESS:
            return reconcile(state, [action.data])
        case DELETE_COMMENT_SUCCESS:
            return state.filter(e => e._id !== action.id)
        default:
            return state
    }
}

export function deleteCommentReducer(state = { success: false }, action) {
    switch (action.type) {
        case DELETE_COMMENT_SUCCESS:
            return Object.assign({}, state, { success: true })
        default:
            return state
    }
}

export function createCommentReducer(state = { success: false }, action) {
    switch (action.type) {
        case CREATE_COMMENT_SUCCESS:
            return Object.assign({}, state, { success: true })
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
