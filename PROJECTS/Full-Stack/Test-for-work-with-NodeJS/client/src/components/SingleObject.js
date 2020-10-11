import React from "react";

const SingleObject = ({
  category,
  type,
  count,
  increaseObject,
  decreaseObject,
  _id,
  isEnglish,
  enCategory,
}) => {
  return (
    <li className="table-row">
      <i className={`fas fa-${type} icon`}></i>
      <p className="category">{isEnglish ? enCategory : category}</p>
      <p className="count">{count}</p>
      <i onClick={() => increaseObject(_id)} className="fas fa-check edit"></i>
      <i
        onClick={() => decreaseObject(_id)}
        className="far fa-trash-alt delete danger"
      ></i>
    </li>
  );
};

export default SingleObject;
