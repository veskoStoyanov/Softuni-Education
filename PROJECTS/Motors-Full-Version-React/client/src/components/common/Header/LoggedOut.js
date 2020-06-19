import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOut = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to='/login'>Login</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to='/register'>Register</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to='/games'>Games</Link>
    </li>
  </ul>
)

export default LoggedOut;