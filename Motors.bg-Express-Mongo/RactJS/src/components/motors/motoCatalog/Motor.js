import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../../style/hotel.css';
import '../../../style/home.css';
import '../../../style/max.css'

import img from '../../../images/like.png';

const Motor = (props) => {
    let link = '/details/' + props._id;

    return (<Link to={link}>
        <div className="card mb-4">
            <img className="card-img-top"
                src={props.image}
                alt="Carimage cap" width="400" />
            <div className="card-body">
                <h4 className="card-title"><strong>{props.model}{props.name}</strong></h4>
                <p className="card-text"><strong>{props.price} Лв</strong></p>
                <span><img src={img} alt="likePage" className='min' /></span><span>{props.likes && props.likes.length - 1}</span>
            </div>
        </div>
    </Link>)
}

Motor.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    model: PropTypes.string,
    name: PropTypes.string,
    likes: PropTypes.array,
    price: PropTypes.number,
};

export default Motor;