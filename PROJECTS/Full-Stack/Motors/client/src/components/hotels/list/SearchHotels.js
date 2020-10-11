import React, { useState } from 'react';
import { connect } from 'react-redux';

const SearchHotels = (props) => {
    const [text, setText] = useState('');

    async function handleSearchSubmit(ev) {
        ev.preventDefault();
        try {
            let hotels = props.data.filter(p => p.city.toLowerCase().startsWith(text.toLowerCase()));
            props.changeState(hotels)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form onSubmit={handleSearchSubmit} className="form-inline my-2 my-lg-0" >
            <input
             value={text} 
             onChange={(e) => setText(e.target.value)} 
             className="form-control mr-sm-2" 
             type="text" 
             placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        data: state.fetchHotels
    }
}

export default connect(mapStateToProps)(SearchHotels);