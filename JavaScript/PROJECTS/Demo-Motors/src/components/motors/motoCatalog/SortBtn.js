import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SortBtn = (props) => {
    return (<Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {props.sortBy}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onSelect={props.handleSubmit} href="#Price-highest">Price-highest</Dropdown.Item>
            <Dropdown.Item onSelect={props.handleSubmit} href="#Price-lowest">Price-lowest</Dropdown.Item>
            <Dropdown.Item onSelect={props.handleSubmit} href="#Alphabetical">Alphabetical</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>)
}


export default SortBtn;

