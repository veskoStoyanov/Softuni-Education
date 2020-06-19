import React from "react";

const Month = ({ enMonth, month, expire, id, setExpire, isEnglish }) => {
  return (
    <div className="bell-container">
      {expire ? <i className="far fa-bell bell primary"></i> : null}
      <p onClick={() => setExpire(id)} className={expire ? "primary" : ""}>
        {isEnglish ? enMonth : month}
      </p>
    </div>
  );
};

export default Month;
