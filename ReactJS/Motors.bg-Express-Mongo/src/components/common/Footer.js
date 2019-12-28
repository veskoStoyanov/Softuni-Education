import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './../../infrastructore/auth';

const Footer = () => {
    const [isLogged, setIsLogged] = useState('');
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        setIsLogged(Auth.isUserAuthenticated());
        setIsAdmin(Auth.isUserAdmin());
    })


    let loggedIn = isAdmin ? (<span>Contact Us!</span>) : (<Link to='/contact/Admin'>Contact Us!</Link>);
    let loggedOut = (<span>Contact Us!</span>)

    return (<footer >
        <div ><span>© 2019 </span>
            Please, do not hesitate to {isLogged ? loggedIn : loggedOut}
        </div>
    </footer>)
}

function mapStateToProps(state) {
    return {
        loginSuccess: state.login.success,
        loginError: state.loginError.hasError,
        user: state.login.data
    }
}

export default connect(mapStateToProps)(Footer)