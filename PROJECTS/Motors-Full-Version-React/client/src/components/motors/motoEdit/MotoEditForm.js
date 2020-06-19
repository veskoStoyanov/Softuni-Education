import React from 'react';
import PropTypes from 'prop-types';

const MotoFormEdit = (props) => (
  <div>
    <fieldset>
      <legend>Model</legend>
      <div className="alert alert-dismissible alert-success">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <strong>Well done!</strong> You successfully read.
        <div className="form-group has-success">
          <input 
            onChange={props.handleChange} 
            value={props.model || ""} 
            name="model" 
            type="text" 
            placeholder="enter model" 
            className="form-control is-valid" 
            id="inputValid" />
        </div>
      </div>
      <legend>Image</legend>
      <div className="alert alert-dismissible alert-secondary">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <strong>Well done!</strong> You successfully read
        <div className="form-group has-success">
          <input 
            onChange={props.handleChange} 
            value={props.image || ""} 
            name="image" type="text" 
            placeholder="enter url image" 
            className="form-control is-valid" 
            id="inputVali" />
        </div>
      </div>
      <legend>Price</legend>
      <div className="alert alert-dismissible alert-info">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <strong>Heads up!</strong> This , but it's
        <div className="form-group">
          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input 
                onChange={props.handleChange} 
                value={props.price || ""} 
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
          name="description" 
          onChange={props.handleChange} 
          value={props.description || ""} 
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae accusantium fugiat quidem molestias 
          inventore harum. Eius libero quos odit, laudantium vero nesciunt facilis culpa debitis. Tempore ratione alias 
          consectetur?" 
          className="form-control" 
          id="exampleTextarea" 
          rows="3">
        </textarea>
      </div>
    </fieldset>
    <button type="submit" className="btn btn-outline-secondary">Edit Motor</button>
  </div>
)

MotoFormEdit.propTypes = {
  handleChange: PropTypes.func,
  model: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};
export default MotoFormEdit;