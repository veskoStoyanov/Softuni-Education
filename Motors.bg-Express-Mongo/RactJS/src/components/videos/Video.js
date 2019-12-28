import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Video = ({model, views, _id}) => {
    let play = 'play/' + _id;

    return (<li className="list-group-item">
        <h5 className="mb-1"><strong>{model}</strong></h5>
        <span className="float-right" >
            <span>{views} views&nbsp;&nbsp;</span>
            <Link to={play} ><button className="btn btn-secondary">Play</button></Link>
        </span>
    </li>)
}

Video.propTypes = {
    _id: PropTypes.string,
    model: PropTypes.string,
    views: PropTypes.number,
};

export default Video;
