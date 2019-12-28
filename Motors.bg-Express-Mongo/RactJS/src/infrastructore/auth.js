class Auth {
  static isUserAuthenticated () {
    return window.sessionStorage.getItem('authToken') !== null
  }

  static getToken () {
    return window.sessionStorage.getItem('authToken')
  }

  static getUsername () {
    return window.sessionStorage.getItem('username')
  }

  static isUserAdmin () {
    let roles = window.sessionStorage.getItem('roles')
    if (!roles) {
      return false
    }
     
    roles = roles.split()
    if (roles.includes('Admin')) {  
    
      return true
    }

    return false
  }
}

export default Auth
