import React from "react";

const Title = ({ text, count }) => {
  return (
    <div className="main-title">
      <h3>
        {text}
        <span className="main-title-count">
          <span>{count}</span>
        </span>
      </h3>
    </div>
  );
};

export default Title;
