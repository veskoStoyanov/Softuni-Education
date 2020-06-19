import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr'

import { Link } from 'react-router-dom';

import { editHotelAction } from '../../../actions/hotelActions';

import Auth from '../../../infrastructore/auth';

const ProfileHotel = (props) => {
    async function unbook(ev) {
        ev.preventDefault();

        await props.editHotel({ username: Auth.getUsername() }, props._id, 'hotels/unbook');

        toastr.success('You deny reservation for this hotel!')
        props.getHotels();
    }

    return (
        <tr class="table-info">
            <th scope="row">{props.name}</th>
            <td>{props.city}</td>
            <td> 
                <Link onClick={unbook} className="btn btn-outline-danger a-btn button">
                    Deny!
                </Link>
            </td>
        </tr>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        editHotel: (data, id, collection) => dispatch(editHotelAction(data, id, collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.editHotel
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHotel);