import React from 'react';
import { Link } from 'react-router-dom';

const Recent = (props) => {
  return (
    <div className="resently">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col"><h4>Resently</h4></th>
            <th scope="col"></th>
          </tr>
          <tr class="table-danger">
            <th scope="row">From</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-dark">
            <th scope="row">
              {props.recently && props.recently.map(any =>
                <Link to={'contact/details/user/' + any._id} key={any._id}>
                  <p>{any.username}</p>
                </Link>)}
            </th>
            <td>
              {props.recently && props.recently.map(any =>
                <p key={any._id}>{any.subject}</p>)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Recent;