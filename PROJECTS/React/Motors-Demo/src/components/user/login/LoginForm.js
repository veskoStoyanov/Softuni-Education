import React from 'react';


import './login.css';

const LoginForm = (props) => (
  <div id="login">
    <div className="bs-docs-section login-container">
      <div className="col-lg-6">
        <div className="bs-component">
          <form onSubmit={props.handleSubmit}>
            <div className="alert alert-dismissible alert-primary">
              <fieldset>
                <h2 className="login-h2">Login</h2>
                <div className="form-group">
                  <p className="login-form">
                    If you already have a registration you can go ahead, but if you haven't done yet, please go to 
                    Register section and make one!
                  </p>
                  <label htmlFor="exampleInputEmail1">User Name</label>
                  <input 
                    onChange={props.handleChange}
                    name="username"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter username" />
                  <small id="emailHelp" className="form-text text-muted">
                    Please enter your username!
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input 
                    onChange={props.handleChange}
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password" />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your password with anyone else.
                  </small>
                </div>
              </fieldset>
              <button type="submit" className="btn btn-secondary ">Login! »»»</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)


export default LoginForm;