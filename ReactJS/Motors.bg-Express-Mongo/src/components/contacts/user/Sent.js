import React from 'react';
import { Link } from 'react-router-dom';

const Sent = (props) => {
    
    return (
        <div className="team">
            <h2>Sent</h2>
            <div className="team-info">
                <h3>To</h3>
                {props.sent && props.sent.map(any => <Link key={any._id} to={'contact/details/user/' + any._id}><p>{any.receiver}</p></Link>)}
            </div>
            <div className="team-info">
                <h3>Subject</h3>
                {props.sent && props.sent.map(any => <p key={any._id}>{any.subject}</p>)}
            </div>
        </div>
    )
}
export default Sent;