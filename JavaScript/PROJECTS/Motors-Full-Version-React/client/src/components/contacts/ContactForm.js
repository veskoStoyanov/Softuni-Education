import React from 'react';
import PropTypes from 'prop-types';

import './contact.css';

const ContactForm = (props) =>
    (
        <div id="contact">
            <section className="mb-4">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">
                    Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.
                </p>
                <div className="row ">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form onSubmit={props.handleSubmit} id="contact-form" name="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input 
                                          value={props.username || ''} 
                                          onChange={props.handleChange} 
                                          type="text" 
                                          id="name" 
                                          name="username" 
                                          className="form-control" />
                                        <label htmlFor="name" className="">Your Username</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input 
                                          value={props.receiver || ''} 
                                          onChange={props.handleChange} 
                                          type="text" 
                                          id="email" 
                                          name="receiver" 
                                          className="form-control" />
                                        <label htmlFor="email" className="">Sent to</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input 
                                          onChange={props.handleChange} 
                                          type="text" 
                                          id="subject"
                                          name="subject" 
                                          className="form-control" />
                                        <label htmlFor="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea 
                                          onChange={props.handleChange} 
                                          type="text" 
                                          id="message" 
                                          name="message" 
                                          rows="2" 
                                          className="form-control md-textarea">
                                        </textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>
                                </div>
                            </div>
                            <input 
                              className="btn btn-outline-danger a-btn btnn" 
                              type="submit" 
                              value="Send" 
                              id="btnDelMoto" />
                        </form>
                        <div className="status"></div>
                    </div>
                    <div className="col-md-3 text-center bor">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>
                            <li>
                                <i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>&#9742; + 01 234 567 89</p>
                            </li>
                            <li>
                                <i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>&#9993; contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )

ContactForm.propTypes = {
    username: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,

};

export default ContactForm;