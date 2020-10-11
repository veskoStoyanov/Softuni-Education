import React from 'react';
import PropTypes from 'prop-types';

import { UnbanBtn, UserBtn } from '../../';

const Moto = (props) => {
    return (
        <li className="list-group-item">
            <h5 className="mb-1 frame">
                <strong>{props.model}</strong>
            </h5>
            <img className="frame" width="320" height="150" src={props.image} alt="motoImg" />
            <span className="float-right button-play" >
                {props.isAdmin ? <UnbanBtn id={props._id} getOwnMotos={props.getOwnMotos} /> :
                    <UserBtn id={props._id} getOwnMotos={props.getOwnMotos} />}
            </span>
        </li>
    )
}

Moto.propTypes = {
    _id: PropTypes.string,
    model: PropTypes.string,
    getOwnMotos: PropTypes.func,
    image: PropTypes.string,
    isAdmin: PropTypes.bool,
};

export default Moto;