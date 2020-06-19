import React, { useContext } from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { InsuranceContext } from "../context";

const Header = () => {
  let { isExpanded, handleNavigation, isEnglish, handleLanguage } = useContext(
    InsuranceContext
  );

  return (
    <>
      <i
        onClick={() => handleNavigation()}
        className="fas fa-bars responsive-nav"
      ></i>

      <header className={`header ${isExpanded ? "show-nav" : ""}`}>
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="header-container">
          <li>
            <NavLink to="/">
              {isEnglish
                ? "My insurance objects"
                : "Моите застрахователни обекти"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              {isEnglish ? "Loyalty program" : "Програма за лоялност"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              {isEnglish ? "Personal data" : "Лични данни"}
            </NavLink>
          </li>
          <li className="language" onClick={handleLanguage}>
            {isEnglish ? "BG" : "EN"}
          </li>
          <li>
            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3BrOi7VIseJz8ZRBfmfpkAxSUe67mn5r93daGQP6kkj9Oh7sJ&usqp=CAU"
              alt="avatar"
            />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
