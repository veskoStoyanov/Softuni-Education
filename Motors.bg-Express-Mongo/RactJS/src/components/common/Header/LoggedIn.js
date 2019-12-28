import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoggedIn = ({isAdmin, username}) => {
    let addMoto = (<li><NavLink activeStyle={{ color: 'red' }} to="/create/moto">Add Moto</NavLink></li>);
    let addVideo = (<li><NavLink activeStyle={{ color: 'red' }} to="/create/video">Add Video</NavLink></li>);
    let mail = (<li><NavLink activeStyle={{ color: 'red' }} to="/mail">Mail</NavLink></li>)
    let hotel = (<li><NavLink activeStyle={{ color: 'red' }} to="/hotel/create">Add Hotel</NavLink></li>)
    let hotels = (<li><NavLink activeStyle={{ color: 'red' }} to="/hotels">Hotels</NavLink></li>)
    return (<ul>
        <li><NavLink activeStyle={{ color: 'red' }} to="/catalog">Home</NavLink></li>
        <li><NavLink activeStyle={{ color: 'red' }} to="/video">Videos</NavLink></li>

        {isAdmin ? addVideo : addMoto}
        {isAdmin ? null : mail}
        {isAdmin ? hotel : null}
        {isAdmin ? hotels : null}

        <div className="right">
            <li>Welcome, {username}!</li>
            <li><NavLink activeStyle={{ color: 'red' }} to="/profile">Profile</NavLink></li>
            <li><NavLink activeStyle={{ color: 'red' }} to="/logout">Logout</NavLink></li>
        </div>
    </ul>)
}

LoggedIn.propTypes = {
    isAdmin: PropTypes.bool,
    username: PropTypes.string,  
};

export default LoggedIn;