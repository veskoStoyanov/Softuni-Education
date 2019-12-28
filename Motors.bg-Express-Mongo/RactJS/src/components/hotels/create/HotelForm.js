import React from 'react';

const HotelForm = (props) => {
    return (<div>
    <div className="form-group">
                        <label htmlFor="title">Name</label>
                        <input name='name' onChange={props.handleChange} type="text" className="form-control" placeholder="Hotel name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Price</label>
                        <input name='price' onChange={props.handleChange} type="text" className="form-control" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="videoUrl">Hotel Url</label>
                        <input name='image' onChange={props.handleChange} type="text" className="form-control" placeholder="Image Url" />
                    </div>
                     </div> )
    
}

export default HotelForm;