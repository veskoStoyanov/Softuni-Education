import React from "react";
import { Link } from "react-router-dom";

import "../css/no-page.css";

const NoPage = () => {
  return (
    <div className="no-page">
      <div class="error">404</div>
      <br />
      <br />
      <span className="info">File not found</span>
      <Link to="/" className="back-btn">
        Dont know what you did?
      </Link>
      <img
        src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
        className="static"
        alt="notFound"
      />
    </div>
  );
};

export default NoPage;
