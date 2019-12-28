import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import toastr from 'toastr'

import {editMotorAction} from '../../../actions/motorsActions';

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

    return (<Fragment>
        <input onClick={banMotors} className="btn btn-outline-primary" type="submit" value="Ban it!" id="btnDelMoto" />
    </Fragment>)
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