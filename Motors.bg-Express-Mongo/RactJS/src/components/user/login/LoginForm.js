import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => (<Fragment>
    <h1>Login</h1>
    <div className="form">
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input id="username" name="username" onChange={props.handleChange} type="text" /><br />

            <label htmlFor="password">Password:</label>
            <input id="password" name="password" onChange={props.handleChange} type="password" /><br />

            <input type="submit" value="Login" />
        </form>
    </div>
</Fragment>)

LoginForm.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default LoginForm;