import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { RegisterForm } from '../..';

import withGuests from '../../../infrastructore/hocs/withGuests';
import { registerAction } from '../../../actions/authActions'

import Valid from '../../../infrastructore/valid';
import text from '../../../infrastructore/textDescription';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            repeatPass: '',
        }
    }

    componentDidMount() {
        toastr.success(text['register']);
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
            let err = Valid.filldsAreRequired({
                username: this.state.username, password: this.state.password,
                repeatPass: this.state.repeatPass
            }); if (err) return toastr.error(`${err} Fields should be fill out!`);

            let errs = await Valid.register(this.state.username, this.state.password,
                this.state.repeatPass); if (errs) return toastr.error(errs);

            await this.props.register(this.state.username, this.state.password);

            if (this.props.regError) {
                toastr.error('Error Register try again!');
            } else if (this.props.registerSuccess) {
                toastr.success('Register successful');
                this.props.history.push('/login');
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
        <RegisterForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (name, password) => dispatch(registerAction(name, password))
    }
}

function mapStateToProps(state) {
    return {
        registerSuccess: state.register.success,
        regError: state.registerError.hasError,
        stat: state
    }
}

Register = withGuests(Register);
export default connect(mapStateToProps, mapDispatchToProps)(Register);

