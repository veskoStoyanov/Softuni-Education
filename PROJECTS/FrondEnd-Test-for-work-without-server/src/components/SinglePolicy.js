import React from "react";

const SinglePolicy = ({
  company,
  type,
  object,
  start,
  end,
  deletepolicy,
  id,
  handleAlter,
}) => {
  return (
    <li className="table-row">
      <p className="company">{company}</p>
      <p className="type">{type}</p>
      <p className="object">{object}</p>
      <p className="start">{start}</p>
      <p className="end">{end}</p>
      <i
        onClick={() => handleAlter(id)}
        className="fas fa-pencil-alt alter"
      ></i>
      <i
        onClick={() => deletepolicy(id)}
        className="far fa-trash-alt delete danger"
      ></i>
    </li>
  );
};

export default SinglePolicy;
