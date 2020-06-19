import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../auth'

const withUserOnly = (Comp) =>
    class extends Component {

        render() {
            if (!Auth.isUserAuthenticated) {
                return <Redirect to='/logout' />

            } else if (Auth.isUserAdmin()) {
                return <Redirect to='/catalog' />
            } else {
                return <Comp {...this.props} />
            }
        }
    }

export default withUserOnly