import React from "react";

const SinglePolicy = ({
  company,
  type,
  object,
  start,
  end,
  deletepolicy,
  _id,
  handleAlter,
  isEnglish,
  enType,
}) => {
  return (
    <li className="table-row">
      <p className="company">{company}</p>
      <p className="type">{isEnglish ? enType : type}</p>
      <p className="object">{object}</p>
      <p className="start">{start}</p>
      <p className="end">{end}</p>
      <i
        onClick={() => handleAlter(_id)}
        className="fas fa-pencil-alt alter"
      ></i>
      <i
        onClick={() => deletepolicy(_id)}
        className="far fa-trash-alt delete danger"
      ></i>
    </li>
  );
};

export default SinglePolicy;
