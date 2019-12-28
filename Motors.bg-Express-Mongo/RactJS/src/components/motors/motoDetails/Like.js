import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toastr from 'toastr'

import '../../../style/max.css'
import img from '../../../images/like.png';

import { editMotorAction } from '../../../actions/motorsActions';

const Like = (props) => {
    async function handleSubmit(ev) {
        ev.preventDefault();

        let like = props.likes.map(any => any.toString());

        try {

            if (!like.includes(props.userId)) {
                await props.editMotor({ userId: props.userId }, props.motoId, 'motors/like')
                toastr.success('You liked it!');
                props.getMotoDetails();

            } else {              
                toastr.error("You cannot like it now!");
            }

        } catch (e) {
            console.log(e);
        }
    }

    return (<div>
        <input onClick={handleSubmit} className='max' name='like' type="image" src={img} alt="Submit" />
        <span></span>
    </div>)
}

Like.propTypes = {
    userId: PropTypes.string,
    motoId: PropTypes.string,
    likes: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
    return {
        editMotor: (data, id, collection) => dispatch(editMotorAction(data, id, collection))
    }
}

function mapStateToProps(state) {
    return {
        isEdit: state.editMotor.success,
        data: state

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Like);