import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import observer from '../../../infrastructore/observar';

import './header.css';



const Header = () => {
  const [username, setUserName] = useState('');
  const [isResponse, setIsResponse] = useState('')

  function userLoggedIn (username) {
    setUserName(username)
  }

  useEffect(() => {
    observer.subscribe(observer.events.loginUser, userLoggedIn) 
  });

  function onSubmitBtn(ev) {
    ev.preventDefault();
    setIsResponse(!isResponse);
  }

  let loggedInNonResponse =(
    <ul className="navbar-nav">
<li className="nav-item">
            <Link className="nav-link" to="/catalog">Catalog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create/moto">Add Motor</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/video">Videos</Link>
          </li>
    </ul>
  )



    let menu = (
      <div className="collapse navbar-collapse" id="navbarResponsive">
       {username ? loggedInNonResponse :  <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/login'>Login</Link>
          </li>   
        </ul>}
      </div>
    )

let responseLoggedIn = (<ul className="main-menu">
<li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/create/moto">Add Motor</Link></li>
          <li><Link to="/video">Videos</Link></li>
</ul>)



    let responseBtn = (
      <nav className="main-nav">
        {username ? responseLoggedIn : <ul className="main-menu">
          <li> <Link to='/login'>Login</Link></li>
        </ul>}
      </nav>
    )






    return (
      <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">Home</Link>
          <form onSubmit={onSubmitBtn}>
            <button
              className="navbar-toggler res-btn"
              type="submit"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </form>
          {isResponse ? responseBtn : menu}
        </div>
      </div>
    )
  
}

export default Header;


