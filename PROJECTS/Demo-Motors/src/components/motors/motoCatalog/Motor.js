import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../../images/like.png';

const Motor = (props) => {
  let link = '/details/' + props._id;

  return (<div className="col-md-3" id="single-moto">
    <div className="card mb-3">
      <h3 className="card-header">{props.model}</h3>
      <div className="card-body">
        <h5 className="card-title">Price: {props.price}$</h5>
      </div>
      <Link to={link}><img className="img" src={props.image} alt="Cardimage" /></Link>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <img className="like" src={img} alt="motorPic" />
          <span className="badge-primary badge-pill">10</span>
        </li>
      </ul>
    </div>
  </div>)
}


export default Motor;