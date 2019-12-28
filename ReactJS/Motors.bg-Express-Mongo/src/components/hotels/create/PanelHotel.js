import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr'

import { deleteHotelAction } from '../../../actions/hotelActions'


const PanelHotel = (props) => {
    async function deleteHotel(ev) {
        ev.preventDefault();
        try {
            await props.deleteHotel(props._id, 'hotels');
            toastr.success('The hotel has been deleted successful!')
            props.getHotels();
        } catch (e) {
            console.log(e);

        }
    }

    return (<li className="list-group-item">
        <h5 className="mb-1">{props.name}</h5>
        <span className="float-right">
            <button onClick={deleteHotel} className="btn btn-danger">Delete</button>
        </span>
    </li>)
}

function mapDispatchToProps(dispatch) {
    return {
        deleteHotel: (id, collection) => dispatch(deleteHotelAction(id, collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelHotel);