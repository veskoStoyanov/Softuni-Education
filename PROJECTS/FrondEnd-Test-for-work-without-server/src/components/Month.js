import React from "react";

const Month = ({ month, expire, id, setExpire }) => {
  return (
    <div className="bell-container">
      {expire ? <i className="far fa-bell bell primary"></i> : null}
      <p onClick={() => setExpire(id)} className={expire ? "primary" : ""}>
        {month}
      </p>
    </div>
  );
};

export default Month;
