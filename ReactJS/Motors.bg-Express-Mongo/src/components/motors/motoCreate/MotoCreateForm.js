import React from 'react';
import PropTypes from 'prop-types';

import '../../../style/bot.css';

import {SelectControl} from '../..';

const MotoCreateForm = (props) => (<div>
    <h1>Add Moto</h1>
    <div className="form motoo">
        <form onSubmit={props.handleSubmit}>
            <SelectControl {...props}/>
            <br />
            <label><strong>Price</strong></label>
            <br />
            <input onChange={props.handleChange} name='price' type="number" />
            <br />
            <label><strong>Model</strong></label>
            <input onChange={props.handleChange} name='model' type="text" />
            <label><strong>Image URL</strong></label>
            <input onChange={props.handleChange} name='image' type="text" />
            <label><strong>Description</strong></label>
            <textarea onChange={props.handleChange} name='description'></textarea>
            <input type="submit" value="Create" />
        </form>
    </div>
</div>)

MotoCreateForm.propTypes = {    
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    
};

export default MotoCreateForm;