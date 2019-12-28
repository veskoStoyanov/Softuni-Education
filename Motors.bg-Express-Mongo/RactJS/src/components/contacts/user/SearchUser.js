import React, { useState } from 'react';

const SearchUser = (props) => {
    const [receiver, setReceiver] = useState('')

    function handleSubmit(ev) {
        ev.preventDefault();
       
        props.history.push(`contact/${receiver}`);
    }

    return (<form onSubmit={handleSubmit} className="search">
        <label>Seach: </label>
        <input onChange={(e) => setReceiver(e.target.value)} value={receiver} type="text" />
        <input type="submit" value="Search" />
    </form>)
}

export default SearchUser;