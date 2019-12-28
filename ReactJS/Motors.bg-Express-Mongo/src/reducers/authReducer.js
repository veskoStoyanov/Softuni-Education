import { REGISTER_SUCCESS, LOGIN_SUCCESS, REGISTER_ERROR, LOGIN_ERROR, LOGOUT_SUCCESS } from '../actions/actionTypes'

function registerReducer(state = { success: false}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { success: true })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { success: false})
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, { success: false})
      case REGISTER_ERROR:
      return Object.assign({}, state, { success: false})
    default:
      return state
  }
}

function loginReducer(state = { success: false, user: {} }, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { success: true, data: action.data })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { success: false, data: {} })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, { success: false, data: {} })
      case LOGIN_ERROR:
      return Object.assign({}, state, { success: false, data: {} })
    default:
      return state
  }
}

function registerErrorReducer(state = { hasError: false, }, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { hasError: false, })
    case REGISTER_ERROR:
      return Object.assign({}, state, { hasError: true,})
    default:
      return state
  }
}

function logoutReducer(state = { success: false, user: {} }, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, { success: true,})
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { success: false,})
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { success: false,})
    default:
      return state
  }
}

function loginErrorReducer(state = { hasError: false }, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return Object.assign({}, state, { hasError: true })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { hasError: false })
    default:
      return state
  }
}

export {
  registerReducer,
  loginReducer,
  registerErrorReducer,
  loginErrorReducer,
  logoutReducer
}
