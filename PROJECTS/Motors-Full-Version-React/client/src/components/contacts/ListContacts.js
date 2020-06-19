import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { Contact } from '../';

import './list-contacts.css';

import { fetchContactAction } from '../../actions/contactActions';
import { withAuthAdmin } from '../../infrastructore/hocs';

import text from '../../infrastructore/textDescription';

class ListContacts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
        }
    }

    async componentDidMount() {
        toastr.success(text['adminMail']);

        try {
            await this.props.getContacts('contact');

            let messages = this.props.messages.filter(any => any.receiver === 'Admin')

            this.setState({
                messages
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div id="list-contactss">
                <h1 className='title'>All Messages From Users!</h1>
                <ul className='lists'>
                    {this.state.messages.map(m => <Contact key={m._id} {...m} />)}
                </ul>
            </div>
        )
    }
}

ListContacts = withAuthAdmin(ListContacts);

function mapDispatchToProps(dispatch) {
    return {
        getContacts: (collection) => dispatch(fetchContactAction(collection))
    }
}

function mapStateToProps(state) {
    return {
        messages: state.contacts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);