import React, { useState } from 'react';

const SearchUser = (props) => {
    const [receiver, setReceiver] = useState('')

    function handleSubmit(ev) {
        ev.preventDefault();

        props.history.push(`contact/${receiver}`);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="form-inline my-2 my-lg-0 search" >
            <input
                className="form-control mr-sm-2"
                onChange={(e) => setReceiver(e.target.value)}
                value={receiver}
                type="text" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>)

}

export default SearchUser;