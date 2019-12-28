import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MotoFormEdit = (props) => (<Fragment>
        <br />
        <label><strong>Price</strong></label>
        <br />
        <input onChange={props.handleChange} value={props.price || ''} name='price' type="number" />
        <br />
        <label><strong>Model</strong></label>
        <input value={props.model || ''} onChange={props.handleChange} name='model' type="text" />
        <label><strong>Moto URL</strong></label>
        <input value={props.image || ''} onChange={props.handleChange} name='image' type="text" />
        <label><strong>Description</strong></label>
        <textarea value={props.description || ''} onChange={props.handleChange} name='description'></textarea>
        <input type="submit" value="Edit" />
    </Fragment>)

MotoFormEdit.propTypes = {
    handleChange: PropTypes.func,
    model: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
};
export default MotoFormEdit;