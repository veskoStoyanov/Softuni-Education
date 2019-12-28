import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Contact } from '../';

import '../../style/demo.css'

import { fetchContactAction } from '../../actions/contactActions';
import { withAuthAdmin } from '../../infrastructore/hocs';

class ListContacts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
        }
    }

    async componentDidMount() {
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
        return (<Fragment>
            <h1 className='h1'>All Messages From Users!</h1>
            <section className='body section' >
                <h2 className='h2'>New Messages</h2>
                <div className="spacer">
                    <ul className='ul'>
                        {this.state.messages.map(m => <Contact key={m._id} {...m} />)}
                    </ul>
                </div>
            </section>
        </Fragment>)
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