import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr'

import {deleteVideoAction} from '../../../actions/videoActions';


const DeleteVideoBtn = (props) => {

    async function deleteVideo(ev) {
        ev.preventDefault();

        try {
            await props.deleteVideo(props.id, 'video');
            toastr.success('The video has been deleted successfuly!')
            props.history.push('/video');

        } catch (e) {
            console.log(e);
        }
    }

    return (<form onSubmit={deleteVideo}>
        <input type="submit" value="Delete" />
    </form>)
}

DeleteVideoBtn.propTypes = {
    id: PropTypes.string,   
};

function mapDispatchToProps(dispatch) {
    return {
        deleteVideo: (id, colletion) => dispatch(deleteVideoAction(id, colletion))
    }
}

function mapStateToProps(state) {
    return {
        isDeleted: state.deleteVideo.success
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteVideoBtn)