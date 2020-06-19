import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './box-details.css';

import { editUserContactAction, fetchUserContactDetailsAction } from '../../../actions/userContactActions';

import Auth from '../../../infrastructore/auth';

class DetailsBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: {},
            username: Auth.getUsername()
        }
    }

    async componentDidMount() {
        try {
            await this.props.detailsContact(this.props.match.params.id, 'contact')
            this.setState({
                contact: this.props.data
            });

            if (this.props.data.isRecent && this.state.username === this.props.data.receiver) {
                await this.props.editContact({ contactId: this.props.data._id }, '', 'contact');

            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div id="box-details">
                <div className="alert alert-success al" role="alert">
                    <h3 className="alert-heading tex">From: {this.state.contact.username}!</h3>
                    <h3 className="alert-heading tex">To: {this.state.contact.receiver}!</h3>
                    <h4 className="alert-heading">Subject: {this.state.contact.subject}!</h4>
                    <p>{this.state.contact.message}</p>
                    <hr />
                    <Link to="/mail" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
                        Back to messages
                    </Link>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        detailsContact: (id, collection) => dispatch(fetchUserContactDetailsAction(id, collection)),
        editContact: (data, id, collection) => dispatch(editUserContactAction(data, id, collection)),
    }
}

function mapStateToProps(state) {
    return {
        data: state.getUserContactDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsBox);
