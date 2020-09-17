import React, { useEffect, useContext }  from 'react';
import { loginMagicLink } from './remote';
import { LoginContext } from "./context";
const About = (props) => {
    let context = useContext(LoginContext);
    let {  setIsLoggedIn} =context;
  const token = props.match.params.token;

     const handle = async () => { 
          let res = await loginMagicLink('magic-link', token)
            console.log(res); 
            if(res.success) {
            setIsLoggedIn(true)
            props.history.push("/")
         }
     }

    useEffect(() => {
        handle()
    }, [])

    return (<h1>Helooooooooo</h1>)
}

export default About;