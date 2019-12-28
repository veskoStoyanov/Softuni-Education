import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LoggedOut = () => (<ul>
    <li><Link to="/">Home</Link></li>
    <li><NavLink activeStyle={{ color: 'red' }} to="/about">About</NavLink></li>
    <li><NavLink activeStyle={{ color: 'red' }} to="/games">Games</NavLink></li>
    <div className="right">
        <li><NavLink activeStyle={{ color: 'red' }} to="/login">Login</NavLink></li>
        <li><NavLink activeStyle={{ color: 'red' }} to="/register">Register</NavLink></li>
      
    </div>
</ul>)

export default LoggedOut;