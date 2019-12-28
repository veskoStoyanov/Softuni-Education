import { FETCH_MOTORS_SUCCESS, FETCH_MOTO_DETAILS_SUCCESS, CREATE_MOTOR_SUCCESS, DELETE_MOTOR_SUCCESS,
   EDIT_MOTOR_SUCCESS, } from '../actions/actionTypes';

export function motorReducer (state = [], action) {
  switch (action.type) {
    case FETCH_MOTORS_SUCCESS:
      return reconcile(state, action.data)
    case CREATE_MOTOR_SUCCESS:
      return reconcile(state, [action.data])
    case EDIT_MOTOR_SUCCESS:
      return reconcile(state, [action.data])
    case DELETE_MOTOR_SUCCESS:
      return state.filter(e => e._id !== action.id)
    default:
      return state
  }
}

export function editMotorReducer (state = {success: false}, action) {
  switch (action.type) {
    case EDIT_MOTOR_SUCCESS:
      return Object.assign({}, state, {success: true})
    default:
      return state
  }
}

export function deleteMotorReducer (state = {success: false}, action) {
  switch (action.type) {
    case DELETE_MOTOR_SUCCESS:
      return Object.assign({}, state, {success: true})
    default:
      return state
  }
}

export function createMotorReducer (state = {success: false}, action) {
  switch (action.type) {
    case CREATE_MOTOR_SUCCESS:
      return Object.assign({}, state, {success: true})
    default:
      return state
  }
}

export function motorDetailsReducer (state = {}, action) {
  switch (action.type) {
    case FETCH_MOTO_DETAILS_SUCCESS:
      return action.data
    default:
      return state
  }
}

function reconcile (oldData, newData) {
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


   
  

