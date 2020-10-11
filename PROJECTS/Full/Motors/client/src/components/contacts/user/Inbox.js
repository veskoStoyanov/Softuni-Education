import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Inbox = (props) => {
    return (
        <div className="inbox">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"><h4>Box</h4></th>
                        <th scope="col"></th>
                    </tr>
                    <tr class="table-info">
                        <th scope="row">From</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-dark">
                        <th scope="row"> {props.inbox && props.inbox.map(any =>
                            <Link to={'contact/details/user/' + any._id} key={any._id}>
                                <p>{any.username}</p>
                            </Link>)}
                        </th>
                        <td>
                            {props.inbox && props.inbox.map(any =>
                                <p key={any._id}>{any.subject}</p>)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Inbox.propTypes = {
    inbox: PropTypes.array,
};

export default Inbox;