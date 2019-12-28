import { FETCH_HOTELS_SUCCESS, EDIT_HOTEL_SUCCESS, DELETE_HOTEL_SUCCESS, C_H_SUCCESS } from '../actions/actionTypes';

export function fetchHotelReducer(state = [], action) {
  switch (action.type) {
    case FETCH_HOTELS_SUCCESS:
      return reconcile(state, action.data)
    case C_H_SUCCESS:
      return reconcile(state, [action.data])
    case EDIT_HOTEL_SUCCESS:
      return reconcile(state, [action.data])
    case DELETE_HOTEL_SUCCESS:
      return state.filter(e => e._id !== action.id)
    default:
      return state
  }
}

export function editHotelReducer(state = { success: false }, action) {
  switch (action.type) {
    case EDIT_HOTEL_SUCCESS:
      return Object.assign({}, state, { success: true })
    default:
      return state
  }
}

export function deleteHotelReducer(state = { success: false }, action) {
  switch (action.type) {
    case DELETE_HOTEL_SUCCESS:
      return Object.assign({}, state, { success: true })
    default:
      return state
  }
}

export function createHotelReducer(state = { success: false }, action) {
  switch (action.type) {
    case C_H_SUCCESS:
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





