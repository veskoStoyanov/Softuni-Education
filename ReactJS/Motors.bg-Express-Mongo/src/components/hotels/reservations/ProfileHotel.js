import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr'

import { editHotelAction } from '../../../actions/hotelActions';
import Auth from '../../../infrastructore/auth';

const ProfileHotel = (props) => {
    async function unbook(ev) {
        ev.preventDefault();
        await props.editHotel({ username: Auth.getUsername() }, props._id, 'hotels/unbook');
        toastr.success('You deny reservation for this hotel!')
        props.getHotels();
    }

    return (<div className="profile">
        <div className="more-info">
            <h5>{props.name}</h5>
        </div>
        <div className="more-info">
            <h5>{props.city}</h5>
        </div>
        <div className="more-info">
            <h5><input onClick={unbook} type="submit" value="   Deny !" /></h5>
        </div>
    </div>)
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