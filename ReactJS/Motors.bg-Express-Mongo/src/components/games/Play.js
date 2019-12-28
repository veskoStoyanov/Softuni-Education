import React from 'react';
import { Link } from 'react-router-dom';

let Play = ({ img, link }) => {
    return (<Link to={link}>
        <div className="card mb-4">
            <img className="card-img-top"
                src={img}
                alt="Carimage cap" width="400" />
            <div className="card-body">

                <h3 className="card-title"><strong>Play</strong></h3>

            </div>
        </div>
    </Link>)
}

export default Play;