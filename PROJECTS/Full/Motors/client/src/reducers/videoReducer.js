import { FETCH_VIDEOS_SUCCESS, FETCH_VIDEO_DETAILS_SUCCESS, CREATE_VIDEO_SUCCESS, DELETE_VIDEO_SUCCESS } 
from '../actions/actionTypes';

export function videoReducer(state = [], action) {
  switch (action.type) {
    case FETCH_VIDEOS_SUCCESS:
      return reconcile(state, action.data)
    case CREATE_VIDEO_SUCCESS:
      return reconcile(state, [action.data])
    case DELETE_VIDEO_SUCCESS:
      return state.filter(e => e._id !== action.id)
    default:
      return state
  }
}

export function deleteVideoReducer(state = { success: false }, action) {
  switch (action.type) {
    case DELETE_VIDEO_SUCCESS:
      return Object.assign({}, state, { success: true })
    default:
      return state
  }
}

export function createVideoReducer(state = { success: false }, action) {
  switch (action.type) {
    case CREATE_VIDEO_SUCCESS:
      return Object.assign({}, state, { success: true })
    default:
      return state
  }
}


export function videoDetailsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_VIDEO_DETAILS_SUCCESS:
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

