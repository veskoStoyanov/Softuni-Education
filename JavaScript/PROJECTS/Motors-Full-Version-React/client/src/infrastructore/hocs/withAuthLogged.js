import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../auth';

const withAuthLogged = (Comp) =>
    class extends Component {

        render() {           
            if (!Auth.isUserAuthenticated()) {
                return <Redirect to='/login' />

            } else {

                return <Comp {...this.props} />
            }
        }
    }

export default withAuthLogged