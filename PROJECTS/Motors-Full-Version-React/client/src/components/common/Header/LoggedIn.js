import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoggedIn = ({ isAdmin }) => {
  let addMoto = (
    <li className="nav-item">
      <Link className="nav-link" to="/create/moto">Add Motor</Link>
    </li>
  );

  let addVideo = (
    <li className="nav-item">
      <Link className="nav-link" to="/create/video">Add Video</Link>
    </li>
  );

  let mail = (
    <li className="nav-item">
      <Link className="nav-link" to="/mail">Mail</Link>
    </li>
  )

  let hotel = (
    <li className="nav-item">
      <Link className="nav-link" to="/hotel/create">Add Hotel</Link>
    </li>
  )

  let hotels = (
    <li className="nav-item">
      <Link className="nav-link" to="/hotels">Hotels</Link>
    </li>
  )
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/video">Videos</Link>
      </li>
      {isAdmin ? addVideo : addMoto}
      {isAdmin ? null : mail}
      {isAdmin ? hotel : null}
      {isAdmin ? hotels : null}
      <li className="nav-item">
        <Link className="nav-link" to="/profile">Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">Logout</Link>
      </li>
    </ul>
  )
}

LoggedIn.propTypes = {
  isAdmin: PropTypes.bool,
  username: PropTypes.string,
};

export default LoggedIn;