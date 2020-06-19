import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHotel from './ProfileHotel';

import './reservations.css';

import { fetchHotelAction } from '../../../actions/hotelActions';
import { withUserOnly } from '../../../infrastructore/hocs';

import Auth from '../../../infrastructore/auth';

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotels: []
    }
  }

  componentDidMount = () => this.getHotels()

  getHotels = async () => {
    try {
      await this.props.fetchHotels('hotels');
      let hotels = this.props.data.filter(any => any.reservations.includes(Auth.getUsername()));
      this.setState({
        hotels
      });

    } catch (e) {
      console.log(e);

    }
  }

  render() {


    return (
      <div id="reservations">
        <table className="table table-hover">
          <thead>
            <tr >
              <th scope="col"></th>
              <th scope="col"><h1>My Reservations</h1></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-active">
              <th scope="row"><h5>Hotel Name</h5></th>
              <th><h5>City</h5></th>
              <th><h5>Deny</h5></th>
            </tr>
            {this.state.hotels.map(x => <ProfileHotel getHotels={this.getHotels} key={x._id} {...x} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

Reservation = withUserOnly(Reservation);

function mapDispatchToProps(dispatch) {
  return {
    fetchHotels: (collection) => dispatch(fetchHotelAction(collection))
  }
}

function mapStateToProps(state) {
  return {
    data: state.fetchHotels
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);