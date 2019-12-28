import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../style/alert.css';

import { fetchContactDetailsAction, deleteContactAction } from '../../actions/contactActions';

class ContactDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: {},
        }
    }

    componentDidMount = async () => {
        try {
            await this.props.detailsContact(this.props.match.params.id, 'contact')

            this.setState({
                contact: this.props.message
            });
        } catch (e) {
            console.log(e);
        }
    }

    componentWillUnmount = async () => {
        try {
            await this.props.deleteContact(this.props.match.params.id, 'contact');

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (<div className="alert alert-success al" role="alert">
            <h3 className="alert-heading tex">From {this.state.contact.username}!</h3>
            <h4 className="alert-heading">{this.state.contact.subject}!</h4>
            <p>{this.state.contact.message}</p>
            <hr />
            <Link to="/list/contacts" className="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Back to messages</Link>
        </div>)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        detailsContact: (id, collection) => dispatch(fetchContactDetailsAction(id, collection)),
        deleteContact: (id, collection) => dispatch(deleteContactAction(id, collection)),
    }
}

function mapStateToProps(state) {
    return {
        message: state.detailsContact
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);