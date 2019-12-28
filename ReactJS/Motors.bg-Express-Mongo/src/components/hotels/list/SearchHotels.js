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
    return (<form onSubmit={handleSearchSubmit} className="search">
        <label>Search: </label>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
        <input type="submit" value="Search" />
    </form>)
}


function mapStateToProps(state) {
    return {
        data: state.fetchHotels
    }
}

export default connect(mapStateToProps, )(SearchHotels);