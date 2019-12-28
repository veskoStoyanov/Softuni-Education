import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import PropTypes from 'prop-types';

import '../../../style/hotel.css';
import '../../../style/home.css';
import '../../../style/max.css';

import Auth from '../../../infrastructore/auth';
import { editHotelAction } from '../../../actions/hotelActions';

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
        <div className="card mb-4">
            <img className="card-img-top"
                src={props.image}
                alt="Carimage cap" width="400" />
            <div className="card-body">
                <h3 className="card-title"><strong>{props.name}</strong></h3>
                <h6 className="card-title"><strong>{props.city}</strong></h6>
                <p className="card-text"><strong>{props.price} Лв</strong></p>
                {Auth.isUserAdmin() ? null : <input onClick={book} className="btn btn-outline-primary" type="submit" value="Book it!" id="btnDelMoto" />}
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