import React from 'react';

const HotelForm = (props) => {
    return (
        <div >
            <div className="form-group">
                <label for="title">Name</label>
                <input 
                  onChange={props.handleChange} 
                  name="name" 
                  type="text" 
                  className="form-control" 
                  placeholder="enter name" />
            </div>
            <div className="form-group">
                <label for="videoUrl">Price</label>
                <input 
                  onChange={props.handleChange} 
                  name="price" type="text" 
                  className="form-control" 
                  placeholder="price" />
            </div>
            <div className="form-group">
                <label for="videoUrl">Hotel Url</label>
                <input 
                 onChange={props.handleChange} 
                 name="image" 
                 type="text" 
                 className="form-control" 
                 placeholder="Hotel Url" />
            </div>
        </div>
    )
}

export default HotelForm;