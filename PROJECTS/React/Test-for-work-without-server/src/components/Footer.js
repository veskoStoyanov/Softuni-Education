import React from "react";
import logo from "../img/logo-24-ins@2x.png";
import app from "../img/app-store.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-footer-container">
        <img src={logo} alt="logoImg" />
        <p>
          Към основния сайт:{" "}
          <Link to="/" className="link">
            www.24ins.bg
          </Link>
        </p>
        <p>
          <Link className="footer-link" to="/">
            Политика за позване
          </Link>{" "}
          | <Link to="/">Използване на бисквитки</Link> |{" "}
          <Link to="/">За Нас</Link>
        </p>
      </div>
      <div className="mobile-app">
        <h2 className="mobile-app-title">Изтегли нашето мобилно приложение</h2>
        <p>
          Дигитален застрахователен агент, който бързо може да предложи решение.
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
