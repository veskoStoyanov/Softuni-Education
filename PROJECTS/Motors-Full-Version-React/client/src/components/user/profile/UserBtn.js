import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toastr from 'toastr';


import { deleteMotorAction } from '../../../actions/motorsActions';

const UserBtn = (props) => {
    async function handleDelete(ev) {
        ev.preventDefault();

        try {
            await props.deleteMotor(props.id, 'motors');
            toastr.success('The motor has been deleted succesfuly!')
            props.getOwnMotos();
        } catch (e) {
            console.log(e);
        }
    }

    let editUrl = `/moto/edit/${props.id}`
    let url = `/details/${props.id}`

    return (
        <Fragment>
            <input
                className="btn btn-outline-danger a-btn"
                onClick={handleDelete}
                type="submit"
                value="Delete"
                id="btnDelMoto" />
            <Link className="btn btn-outline-danger a-btn" to={editUrl} role="button">Edit</Link>
            <Link to={url}><button className="btn btn-outline-danger a-btn">Details</button></Link>
        </Fragment>
    )
}

UserBtn.propTypes = {
    id: PropTypes.string,
    getOwnMotos: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
    return {
        deleteMotor: (id, colletion) => dispatch(deleteMotorAction(id, colletion))
    }
}

function mapStateToProps(state) {
    return {
        isDeleted: state.deleteMotor.success
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBtn)