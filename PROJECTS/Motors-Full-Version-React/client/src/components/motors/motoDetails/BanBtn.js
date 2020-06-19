import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { editMotorAction } from '../../../actions/motorsActions';

const BanBtn = (props) => {
    async function banMotors(ev) {
        ev.preventDefault();

        try {
            await props.editMotor({}, props.id, 'motors/ban');
            toastr.success("The motor has been banned!")
            props.history.push('/catalog');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Link onClick={banMotors} className="btn btn-outline-danger a-btn">Ban It</Link>
    )
}

Comment.propTypes = {
    id: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
    return {
        editMotor: (data, id, collection) => dispatch(editMotorAction(data, id, collection))
    }
}

function mapStateToProps(state) {
    return {
        isEdit: state.editMotor.success
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BanBtn);