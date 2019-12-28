import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import city from '../../infrastructore/citiesLocation';
import Auth from '../../infrastructore/auth';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class MapContainer extends Component {

  render() {

    if (!Auth.isUserAuthenticated()) {
      return <Redirect to='/login' />
    } else {
      let position = this.props.match.params.city;

      let lat = city[position]['lat'];
      let lng = city[position]['lng'];
      return (<Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat, lng }} >
        <Marker position={{ lat, lng }} />
      </Map>);
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDllw5JRhTCxvvisGf6LzsJSeiyhVmVu4c'
})(MapContainer);