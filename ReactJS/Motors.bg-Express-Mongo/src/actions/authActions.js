import { REGISTER_SUCCESS, LOGOUT_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_ERROR, REGISTER_ERROR } from './actionTypes'
import { beginAjax, endAjax } from './ajaxStatusActions'
import { login, register, logout } from '../infrastructore/remote';
function registersuccess() {
  return {
    type: REGISTER_SUCCESS,

  }
}

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

function registerError() {
  return {
    type: REGISTER_ERROR,

  }
}

function loginError() {
  return {
    type: LOGIN_ERROR,
  }
}

function logoutError() {
  return {
    type: LOGOUT_ERROR,

  }
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,

  }
}

function registerAction(username, password, image) {
  return (dispatch) => {
    dispatch(beginAjax())
    return register(username, password, image)
      .then(json => {
        if (json.success) {
          dispatch(registersuccess())
        } else {
          dispatch(registerError())
        }
        dispatch(endAjax())
      })
      .catch(() => {
        dispatch(registerError())
        dispatch(endAjax())
      })
  }
}

function loginAction(username, password) {
  return (dispatch) => {
    dispatch(beginAjax())
    return login(username, password)
      .then(json => {
        if (json.success) {
          authenticateUser(json)
          dispatch(loginSuccess(json))
        } else {
          dispatch(loginError())
        }
        dispatch(endAjax())
      })
      .catch(() => {
        dispatch(loginError())
        dispatch(endAjax())
      })
  }
}

function logoutAction() {
  return (dispatch) => {
    dispatch(beginAjax())
    return logout()
      .then(json => {
        if (json.success) {
          deauthenticateUser()
          dispatch(logoutSuccess({ success: true, error: false }))
        } else {
          dispatch(logoutError({ success: false, error: true }))
        }
        dispatch(endAjax())
      })
      .then(() => {
        dispatch(logoutError({ success: false, error: true }))
      })
  }
}

function authenticateUser(json) {
  window.sessionStorage.setItem('authToken', json.token);
  window.sessionStorage.setItem('username', json.user.username);
  window.sessionStorage.setItem('userId', json.user._id);
  window.sessionStorage.setItem('image', json.user.image);
  if (json.user.roles && json.user.roles.length > 0) {
    window.sessionStorage.setItem('roles', json.user.roles)
  }
}

function deauthenticateUser() {
  window.sessionStorage.clear()
}

export {
  registerAction,
  loginAction,
  logoutAction,
}
