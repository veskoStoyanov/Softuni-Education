import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './footer.css'

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

    return (
        <div id="footer">
            <div className="container">
                <section style={{ height: "80px" }}></section>
                <div className="row" style={{ textAlign: "center" }}>
                </div>
                <footer className="footer-bs">
                    <div className="row">
                        <div className="col-md-3 footer-brand animated fadeInLeft">
                            <img alt="footerImg" src="https://cdn.shopify.com/s/files/1/0290/5565/files/proudly-canadian_large.png?674" />
                            <p>© 2019 MotorBg, All rights reserved</p>
                        </div>
                        <div className="col-md-4 footer-nav animated fadeInUp">
                            <div className="col-md-6">
                                <ul className="list">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li>{isLogged ? loggedIn : loggedOut}</li>
                                    <li>Terms and Condition</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 footer-social animated fadeInDown">
                            <h4>Follow Us</h4>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>RSS</li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <section style={{ textAlign: "center", margin: "10px auto" }}>
                    <p>
                        Designed by <Link to="https://veskostoyanov.github.io/blog/">Vesko S </Link>
                    </p>
                </section>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        loginSuccess: state.login.success,
        loginError: state.loginError.hasError,
        user: state.login.data
    }
}

export default connect(mapStateToProps)(Footer)