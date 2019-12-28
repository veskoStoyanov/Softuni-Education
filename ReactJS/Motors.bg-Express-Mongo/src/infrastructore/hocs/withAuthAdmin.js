import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../auth'

const withAuthAdmin = (Comp) =>
    class extends Component {
        render() {
         
            if (!Auth.isUserAuthenticated()) {
                return <Redirect to='/login' />
            }  if (!Auth.isUserAdmin()) {               
                return <Redirect to='/catalog' />
            }                      
                return <Comp {...this.props} />            
        }
    }

export default withAuthAdmin;