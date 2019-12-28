import React from 'react';
import { Link } from 'react-router-dom';

const Recent = (props) => {
    return (
        <div className="team">
            <h2>Resently</h2>
            <div className="team-info">
                <h3>From</h3>
                {props.recently && props.recently.map(any => <Link to={'contact/details/user/' + any._id} key={any._id}><p>{any.username}</p></Link>)}
            </div>
            <div className="team-info">
                <h3>Subject</h3>
                {props.recently && props.recently.map(any => <p key={any._id}>{any.subject}</p>)}
            </div>
        </div>
    )
}

export default Recent;