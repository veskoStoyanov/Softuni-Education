import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from "./context";

const Email = ({ endpoint }) => {
    let context = useContext(LoginContext);
    let { token } = context;

    return (
        <>
            <h1>Your Email</h1>
            {token ?
                <p>
                    Helloo please verify your email with click on the link
        <Link to={`/user/login/${endpoint}/${token}`} >
                        Click to confirm email.
        </Link>
                </p> : 'There are no messages'}
            <br></br>
            <Link to='/'>Home Page</Link>
        </>
    )
};

export default Email;