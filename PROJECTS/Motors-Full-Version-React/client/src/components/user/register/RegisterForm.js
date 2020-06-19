import React from 'react';
import PropTypes from 'prop-types';

import './register.css';

const RegisterForm = (props) => (
  <div id="register">
    <div className="alert alert-dismissible alert-warning register-alert-warning">
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <h4 className="alert-heading register-h4">Warning!</h4>
      <p className="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. 
      Praesent commodo cursus magna, <span className="alert-link">vel scelerisque nisl consectetur et</span>.
      </p>
    </div>
    <div className="bs-docs-section register-container">
      <div className="col-lg-6">
        <div className="bs-component">
          <form onSubmit={props.handleSubmit} >
            <div className="alert alert-dismissible alert-primary">
              <fieldset>
                <h2 className="register-h2">Register</h2>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">User Name</label>
                  <input 
                    onChange={props.handleChange} 
                    name="username" type="text" 
                    className="form-control" 
                    id="exampleInputEmail1"
                    placeholder="Enter username" />
                  <small id="emailHelp" className="form-text text-muted">
                    Please choose an username and enter it!
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword">Password</label>
                  <input 
                    onChange={props.handleChange} 
                    name="password" type="password" 
                    className="form-control" 
                    id="exampleInputPassword"
                    placeholder="Password" />
                  <small id="emailHelp" className="form-text text-muted">
                      We'll never share your password with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">re-Password</label>
                  <input 
                    onChange={props.handleChange} 
                    name="repeatPass" type="password"
                    className="form-control" 
                    id="exampleInputPassword1"
                    placeholder="re-Password" />
                  <small id="emailHelp" className="form-text text-muted">
                    Please repeat the password again!
                  </small>
                </div>
              </fieldset>
              <button type="submit" className="btn btn-secondary">Register! »»»</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

RegisterForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default RegisterForm;