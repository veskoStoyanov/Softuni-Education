import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { ContactForm } from '../';

import '../../style/bot.css'

import { withAuthLogged, withUserOnly } from '../../infrastructore/hocs';
import Valid from '../../infrastructore/valid';
import Auth from '../../infrastructore/auth';
import { createContactAction } from '../../actions/contactActions'

class PostContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: Auth.getUsername(),
            message: '',
            subject: '',
            receiver: props.match.params.name
        }
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();


        try {
            let err = Valid.filldsAreRequired({
                username: this.state.username,
                receiver: this.state.receiver,
                message: this.state.message,
                subject: this.state.subject,
            }); if (err) toastr.error(`${err} is required!`);

            let data = {
                username: this.state.username,
                receiver: this.state.receiver,
                message: this.state.message,
                subject: this.state.subject,
            }

            await this.props.createContact(data, 'contact');
            this.props.history.push('/mail')

        } catch (e) {
            console.log(e);
        }
    }

    handleChange = ev => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;

        this.setState({
            [fieldName]: fieldValue
        });
    }

    render() {
        return <ContactForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            username={this.state.username}
            receiver={this.state.receiver} />
    }
}

PostContact = withUserOnly(PostContact)
PostContact = withAuthLogged(PostContact)

function mapDispatchToProps(dispatch) {
    return {
        createContact: (data, collection) => dispatch(createContactAction(data, collection))
    }
}

function mapStateToProps(state) {
    return {
        isCreated: state.createContact.success
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContact);