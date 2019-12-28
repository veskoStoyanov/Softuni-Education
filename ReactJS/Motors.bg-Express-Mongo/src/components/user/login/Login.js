import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { LoginForm } from '../..';

import { loginAction } from '../../../actions/authActions';
import Auth from '../../../infrastructore/auth';
import Valid from '../../../infrastructore/valid'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (ev) => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;

        this.setState({
            [fieldName]: fieldValue
        });
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            let err = Valid.filldsAreRequired({username:this.state.username, password: this.state.password});
            if (err) return toastr.error(`${err} is required!`)
            


            let errs = await Valid.login(this.state.username, this.state.password);
            if (errs) return toastr.error(errs)
           
            await this.props.login(this.state.username, this.state.password);

            if (this.props.loginError) {
                return toastr.error('Error Login try again!')
            } else if (this.props.loginSuccess) {
                toastr.success('Login successful')
                this.props.history.push('/catalog')
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        if (Auth.isUserAuthenticated()) {
            return <Redirect to='/catalog' />
        } else {

            return (<LoginForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />)
        }

    }
}


function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(loginAction(username, password))
    }
}

function mapStateToProps(state) {
    return {
        loginSuccess: state.login.success,
        loginError: state.loginError.hasError,
        data: state.login.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)