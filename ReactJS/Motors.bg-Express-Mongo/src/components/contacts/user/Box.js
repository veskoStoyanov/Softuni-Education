import React, { Component } from 'react';
import { connect } from 'react-redux';

import {SearchUser, Sent, Recent, Inbox} from '../../';
import Auth from '../../../infrastructore/auth';

import {fetchUserContactAction} from '../../../actions/userContactActions'
import {withUserOnly} from '../../../infrastructore/hocs'

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sent: [],
      recently: [],
      inbox: [],
      username: Auth.getUsername()
    }
  }

  async componentDidMount() {
    await this.props.getContacts('contact');

    let sent = this.props.data.filter(any => any.username === this.state.username && any.receiver !== 'Admin');
    let recently = this.props.data.filter(any => any.receiver === this.state.username && any.isRecent);
    let inbox = this.props.data.filter(any => any.receiver === this.state.username && !any.isRecent);

    this.setState({
      sent,
      recently,
      inbox,
    });
  }

  render() {
    return (<main>
      <h1>Mail Box</h1>

      <SearchUser history={this.props.history} />

      <div className="teams">
        <Recent recently={this.state.recently} />
        <Inbox inbox={this.state.inbox} />
        <Sent sent={this.state.sent} />
      </div>
    </main>)
  }
}

Box = withUserOnly(Box);

function mapDispatchToProps(dispatch) {
  return {
      getContacts: (collection) => dispatch(fetchUserContactAction(collection))
  }
}

function mapStateToProps(state) {
  return {
      data: state.getUserContacts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);