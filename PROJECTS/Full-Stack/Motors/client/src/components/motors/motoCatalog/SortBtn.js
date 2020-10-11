import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';

const SortBtn = (props) => {
    return (<Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {props.sortBy}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onSelect={props.handleSubmit} href="#Price-highest">Price-highest</Dropdown.Item>
            <Dropdown.Item onSelect={props.handleSubmit} href="#Price-lowest">Price-lowest</Dropdown.Item>
            <Dropdown.Item onSelect={props.handleSubmit} href="#Most-likes">Most-likes</Dropdown.Item>
            <Dropdown.Item onSelect={props.handleSubmit} href="#Alphabetical">Alphabetical</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>)
}

SortBtn.propTypes = {
    handleSubmit: PropTypes.func,
    sortBy: PropTypes.string,
};

export default SortBtn;

