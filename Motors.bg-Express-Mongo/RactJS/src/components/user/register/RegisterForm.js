import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = (props) => (<div>
        <h1>Register</h1>
        <div className="form">
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="name">Username:</label>
                <input name="username" onChange={props.handleChange} type="text" /><br />

                <label htmlFor="name">Password:</label>
                <input name="password" onChange={props.handleChange} type="password" /><br />

                <label htmlFor="name">Repeat-Password:</label>
                <input name="repeatPass" onChange={props.handleChange} type="password" /><br />

                <label htmlFor="name">Image URL</label>
                <input name="image" onChange={props.handleChange} type="text" /><br />

                <input type="submit" value="Register" />
            </form>
        </div>
    </div>)

RegisterForm.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default RegisterForm;