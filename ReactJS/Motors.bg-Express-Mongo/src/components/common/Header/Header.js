import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { LoggedOut, LoggedIn } from '../../';

import Auth from '../../../infrastructore/auth';

const Header = () => {
    const [username, setUserName] = useState('');
    const [isAdmin, setIsAdmin] = useState('')

    useEffect(() => {
        setUserName(Auth.getUsername())
        setIsAdmin(Auth.isUserAdmin())
    });

    return (<header>
        {username ? <LoggedIn username={username} isAdmin={isAdmin} /> : <LoggedOut />}
    </header>)
}

function mapStateToProps(state) {
    return {
        loginSuccess: state.login.success,
        loginError: state.loginError.hasError,
        user: state.login.data
    }
}

export default connect(mapStateToProps)(Header)