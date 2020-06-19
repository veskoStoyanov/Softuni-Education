import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMotorAction } from '../../../actions/motorsActions';

const Search = (props) => {
    const [text, setText] = useState('');

    async function handleSearchSubmit(ev) {
        ev.preventDefault();

        try {
            await props.fetchMotors('motors');

            let data = props.allMotors.filter(p => p.model.toLowerCase().startsWith(text.toLowerCase()));

            props.changeState(data);
        } catch (e) {
            console.log(e);
        }
    }

    return (<form onSubmit={handleSearchSubmit} className="form-inline my-2 my-lg-0" >
            <input value={text} 
                   onChange={(e) => setText(e.target.value)} 
                   className="form-control mr-sm-2" 
                   type="text" 
                   placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>)
}

Search.propTypes = {
    changeState: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
    return {
        fetchMotors: (collection) => dispatch(fetchMotorAction(collection))
    }
}

function mapStateToProps(state) {
    return {
        allMotors: state.motor
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);