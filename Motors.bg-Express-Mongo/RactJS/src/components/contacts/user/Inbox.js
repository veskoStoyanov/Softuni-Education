import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Inbox = (props) => {
    return (<div className="team">
        <h2>Box</h2>
        <div className="team-info">
            <h3>From</h3>
            {props.inbox && props.inbox.map(any => <Link to={'contact/details/user/' + any._id} key={any._id}><p>{any.username}</p></Link>)}
        </div>
        <div className="team-info">
            <h3>Subject</h3>
            {props.inbox && props.inbox.map(any => <p key={any._id}>{any.subject}</p>)}
        </div>
    </div>)
}

Inbox.propTypes = {
    inbox: PropTypes.array,  
};

export default Inbox;