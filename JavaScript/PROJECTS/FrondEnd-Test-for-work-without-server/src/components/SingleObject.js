import React from "react";

const SingleObject = ({
  category,
  type,
  count,
  increaseObject,
  decreaseObject,
  id,
}) => {
  return (
    <li className="table-row">
      <i className={`fas fa-${type} icon`}></i>
      <p className="category">{category}</p>
      <p className="count">{count}</p>
      <i onClick={() => increaseObject(id)} className="fas fa-check edit"></i>
      <i
        onClick={() => decreaseObject(id)}
        className="far fa-trash-alt delete danger"
      ></i>
    </li>
  );
};

export default SingleObject;
