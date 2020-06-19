import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Video = ({ model, views, _id, url }) => {
    let play = 'play/' + _id;

    return (
        <li className="list-group-item">
            <h5 className="mb-1 frame"><strong>{model}</strong></h5>
            <iframe className="frame" width="320" height="215" title="hi" src={url}> </iframe>
            <span className="float-right button-play" >
                <span>{views} views&nbsp;&nbsp;</span>
                <Link to={play}>
                    <button className="btn btn-secondary">Play</button>
                </Link>
            </span>
        </li>
    )
}

Video.propTypes = {
    _id: PropTypes.string,
    model: PropTypes.string,
    views: PropTypes.number,
};

export default Video;
