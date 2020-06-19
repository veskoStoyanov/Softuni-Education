import React from "react";
import logo from "../img/logo-24-ins@2x.png";
import app from "../img/app-store.png";
import { Link } from "react-router-dom";

const Footer = ({ isEnglish }) => {
  return (
    <footer className="footer">
      <div className="logo-footer-container">
        <img src={logo} alt="logoImg" />
        <p>
          {isEnglish ? "To the main site" : "Към основния сайт"} :{" "}
          <a href="http://24ins.bg/" className="link">
            www.24ins.bg
          </a>
        </p>
        <p>
          <Link className="footer-link" to="/">
            {isEnglish ? "Usage policy" : "Политика за ползване"}
          </Link>{" "}
          |{" "}
          <Link to="/">
            {" "}
            {isEnglish ? "Use of cookies" : "Използване на бисквитки"}
          </Link>{" "}
          | <Link to="/"> {isEnglish ? "About us" : "За Нас"}</Link>
        </p>
      </div>
      <div className="mobile-app">
        <h2 className="mobile-app-title">
          {" "}
          {isEnglish
            ? "Download our mobile app"
            : "Изтегли нашето мобилно приложение"}
        </h2>
        <p>
          {isEnglish
            ? "A digital insurance agent that can quickly offer a solution."
            : "Дигитален застрахователен агент, който бързо може да предложи решение."}
        </p>
        <div className="app-container">
          <img src={app} alt="appStoreImg" />
          <img src={app} alt="appStoreImg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
