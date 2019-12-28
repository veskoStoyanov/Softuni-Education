import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMotorAction } from '../../../actions/motorsActions';

const Search = (props) => {
    const [text, setText] = useState('')

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
    return (<form onSubmit={handleSearchSubmit} className="search">
        <label>Search: </label>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
        <input type="submit" value="Search" />
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