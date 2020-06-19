import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';

import { editHotelAction } from '../../../actions/hotelActions';

import Auth from '../../../infrastructore/auth';

const Hotel = (props) => {
    async function book(ev) {
        ev.preventDefault();
        try {
            if (!props.reservations.includes(Auth.getUsername())) {
                await props.editHotel({ username: Auth.getUsername() }, props._id, 'hotels/book');
                toastr.success(" You`ve booked it!");
                props.getHotels();
            } else {
                toastr.error("You cannot book it now!");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="col-md-3">
            <div className="card mb-3">
                <h3 className="card-header">{props.name}</h3>
                <div className="card-body">
                    <h5 className="card-title">Price: {props.price}$</h5>
                </div>
                <img className="img" src={props.image} alt="Cardimage" />
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <h5 className="card-title">City: {props.city}</h5>
                        {Auth.isUserAdmin() ? null : 
                        <input onClick={book} 
                         className="btn btn-outline-primary btnn" 
                         type="submit" 
                         value="Book it!" 
                         id="btnDelMoto" />}
                    </li>
                </ul>
            </div>
        </div>
    )
}

Hotel.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    content: PropTypes.string,
    book: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return {
        editHotel: (data, id, collection) => dispatch(editHotelAction(data, id, collection))
    }
}

function mapStateToProps(state) {
    return {
        isBooked: state.editHotel.success
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);