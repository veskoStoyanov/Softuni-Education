import React from 'react';
import { Link } from 'react-router-dom';

const Sent = (props) => {
    return (
        <div className="sent">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"><h4>Sent</h4></th>
                        <th scope="col"></th>
                    </tr>
                    <tr class="table-danger">
                        <th scope="row">To</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-dark">
                        <th scope="row">
                            {props.sent && props.sent.map(any =>
                                <Link key={any._id} to={'contact/details/user/' + any._id}>
                                    <p>{any.receiver}</p>
                                </Link>)}
                        </th>
                        <td>
                            {props.sent && props.sent.map(any =>
                                <p key={any._id}>{any.subject}</p>)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
export default Sent;