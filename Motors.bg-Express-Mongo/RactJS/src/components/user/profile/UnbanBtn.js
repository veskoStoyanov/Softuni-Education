import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import toastr from 'toastr';

import {editMotorAction} from '../../../actions/motorsActions';

const UnbanBtn = (props) => {

    async function handleSubmitUnBan(ev) {
        ev.preventDefault();

        try {
            await props.editMotor({}, props.id, 'motors/unban');
            toastr.success("The motor has been banned!")
            props.getOwnMotos();

        } catch (e) {
            console.log(e);
        }
    }

    return (<Fragment>
        <input onClick={handleSubmitUnBan} type="submit" value="UnBanned" id="btnDelMoto" />
    </Fragment>)
}

UnbanBtn.propTypes = {
    id: PropTypes.string,
    getOwnMotos: PropTypes.func,
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

export default connect(mapStateToProps, mapDispatchToProps)(UnbanBtn);