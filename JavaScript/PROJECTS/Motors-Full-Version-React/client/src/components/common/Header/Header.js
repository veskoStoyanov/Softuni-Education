import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.css';

import { LoggedOut, LoggedIn } from '../../';

import Auth from '../../../infrastructore/auth';

const Header = () => {
  const [username, setUserName] = useState('');
  const [isAdmin, setIsAdmin] = useState('')

  useEffect(() => {
    setUserName(Auth.getUsername())
    setIsAdmin(Auth.isUserAdmin())
  });

  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          {username ? <LoggedIn username={username} isAdmin={isAdmin} /> : <LoggedOut />}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    loginSuccess: state.login.success,
    loginError: state.loginError.hasError,
    user: state.login.data
  }
}

export default connect(mapStateToProps)(Header)