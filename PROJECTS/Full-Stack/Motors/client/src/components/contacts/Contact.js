import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Contact = ({ username, _id }) => {
    let url = `/contact/details/${_id}`;

    return (
        <li>
            <Link className="btn btn-outline-danger a-btn btns" to={url}>
                {username}
            </Link>
        </li>
    )
}
Comment.propTypes = {
    _id: PropTypes.string,
    username: PropTypes.string,
};

export default Contact;