import React from 'react';
import PropTypes from 'prop-types';

import '../../../style/bot.css';

import { UnbanBtn, UserBtn } from '../../';

const Moto = (props) => {
    return (<li className="list-group-item">
        <h3 className="mb-1">{props.model}</h3>
        <div className="col-md-8">
            <img className="img-fluid imgg" src={props.image}
                alt="profilePic" />
        </div>
        <span className="float-right">

            {props.isAdmin ? <UnbanBtn id={props._id} getOwnMotos={props.getOwnMotos} /> : <UserBtn id={props._id} getOwnMotos={props.getOwnMotos} />}
        </span>
    </li>)
}

Moto.propTypes = {
    _id: PropTypes.string,
    model: PropTypes.string,
    getOwnMotos: PropTypes.func,
    image: PropTypes.string,
    isAdmin: PropTypes.bool,
};

export default Moto;