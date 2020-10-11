import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../auth';

const withGuests = (Comp) =>
    class extends Component {

        render() {
            if (Auth.isUserAuthenticated()) {
                return <Redirect to='/catalog' />
            } else {

                return <Comp {...this.props} />
            }
        }
    }

export default withGuests