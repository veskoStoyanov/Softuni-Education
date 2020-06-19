import React, { Component } from 'react';
import toastr from 'toastr';
import { LoginForm } from '../..';

import observer from '../../../infrastructore/observar';

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

        if(this.state.password === '' || this.state.username === ''){
            return toastr.error('All fields are required!')
        }

        observer.trigger(observer.events.loginUser, this.state.username)
            window.sessionStorage.setItem('username', this.state.username);
            toastr.success('Login successful')
            this.props.history.push('/catalog')
           
        
        
    }
    render() {
            return (
            <LoginForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
            )
        } 
}

export default Login