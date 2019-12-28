import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHotel from './ProfileHotel';

import Auth from '../../../infrastructore/auth';
import { fetchHotelAction } from '../../../actions/hotelActions';
import { withUserOnly } from '../../../infrastructore/hocs';

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
    return (<main>
      <h1>My Reservations</h1>
      <div className="profile-box">
        <div className="profile">
          <div className="">
            <h3>Hotels</h3>
          </div>
          <div className="more-info">
            <h3>In City</h3>
          </div>
          <div className="more-info">
            <h3>Unbook?</h3>
          </div>
        </div>
        {this.state.hotels.map(x => <ProfileHotel getHotels={this.getHotels} key={x._id} {...x} />)}

      </div>
    </main>)
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