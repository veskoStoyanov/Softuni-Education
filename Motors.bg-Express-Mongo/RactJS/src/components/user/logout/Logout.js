import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { logoutAction } from '../../../actions/authActions';
import Auth from '../../../infrastructore/auth';

class Logout extends Component {

    componentDidMount = async () => {
        if (Auth.getUsername()) {
            try {
                this.props.logout();
            } catch (e) {
                toastr.error('Error Logout')
                console.log(e);
            }
        } else {
            this.props.history.push('/login')
        }
    }

    componentDidUpdate() {

        if (this.props.logoutSuccess) {
            toastr.success('Logout successful')
            this.props.history.push('/about')
        }
    }

    render() {
        return (<Fragment></Fragment>)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logoutAction())
    }
}
function mapStateToProps(state) {
    return {
        logoutSuccess: state.logout.success,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)

