import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <section style={{ height: "80px" }}></section>
                <div className="row" style={{ textAlign: "center" }}>
                </div>
                <footer className="footer-bs">
                    <div className="row">
                        <div className="col-md-3 footer-brand animated fadeInLeft logo">
                            <img alt="footerImg" src="https://cdn.shopify.com/s/files/1/0290/5565/files/proudly-canadian_large.png?674" />
                            <p>© 2019 MotorBg, All rights reserved</p>
                        </div>
                        <div className="col-md-4 footer-nav animated fadeInUp">
                            <div className="col-md-6">
                                <ul className="list">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li>Contact Us!</li>
                                    <li>Terms and Condition</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 footer-social animated fadeInDown logo">
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

export default Footer