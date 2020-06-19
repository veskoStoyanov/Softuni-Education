import React from 'react';
import PropTypes from 'prop-types';

import { SelectControl } from '../..';

import './moto-create.css'

const MotoCreateForm = (props) => (
  <div id="moto-create">
    <div className="row">
      <div className="col-lg-6">
        <div className="bs-component">
          <form onSubmit={props.handleSubmit}>
            <fieldset>
              <legend>City</legend>
              <div className="form-group">
                <SelectControl {...props} />
              </div>
              <legend>Model</legend>
              <div className="alert alert-dismissible alert-success">
                <button type="button" className="close" data-dismiss="alert"></button>
                <strong>Well done!</strong> You successfully read.
              <div className="form-group has-success">
                  <input
                    onChange={props.handleChange} 
                    name="model" type="text" 
                    placeholder="enter model" 
                    className="form-control is-valid" 
                    id="inputValid" />
                </div>
              </div>
              <legend>Image</legend>
              <div className="alert alert-dismissible alert-secondary">
                <button type="button" className="close" data-dismiss="alert"></button>
                <strong>Well done!</strong> You successfully read
              <div className="form-group has-success">
                  <input 
                    onChange={props.handleChange} 
                    name="image" 
                    type="text" 
                    placeholder="enter url image" 
                    className="form-control is-valid" 
                    id="inputVali" />
                </div>
              </div>
              <legend>Price</legend>
              <div className="alert alert-dismissible alert-info">
                <button type="button" className="close" data-dismiss="alert"></button>
                <strong>Heads up!</strong> This , but it's
              <div className="form-group">
                <div className="form-group">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input 
                        onChange={props.handleChange} 
                        name="price" 
                        placeholder="enter price" 
                        type="text" 
                        className="form-control" 
                        aria-label="Amount (to the nearest dollar)" />
                      <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <legend>Description</legend>
              <div className="form-group">
                <textarea 
                  onChange={props.handleChange} 
                  name="description" 
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae accusantium fugiat quidem molestias inventore harum. Eius libero quos odit, laudantium vero nesciunt facilis culpa debitis. Tempore ratione alias consectetur?" 
                  className="form-control" 
                  id="exampleTextarea" 
                  rows="3">
                </textarea>
              </div>
            </fieldset>
            <button type="submit" className="btn btn-outline-secondary">Create Motor</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

MotoCreateForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,

};

export default MotoCreateForm;