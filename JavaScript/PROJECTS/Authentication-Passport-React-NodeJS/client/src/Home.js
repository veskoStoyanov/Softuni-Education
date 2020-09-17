import React, { useState, useContext } from 'react';
import { LoginContext } from "./context";
import { Link } from 'react-router-dom';

import Social from './Social';

import { register, login, loginEmail, logout, remove } from './remote';

const Home = ({ setEndpoint }) => {
  let context = useContext(LoginContext);
  let { setToken, isLoggedIn, setIsLoggedIn, token } = context;

  const [ emailLog, setEmailLog ] = useState('');
  const [ passwordLog, setPasswordLog ] = useState('');

  const [ emailReg, setEmailReg ] = useState('');
  const [ passwordReg, setPasswordReg ] = useState('');
  const [ magicEmail, setMagicEmail ] = useState('');

  async function changeTitle(isLoggedIn, token) {
    setIsLoggedIn(isLoggedIn);
    setToken(token);
  }

  const submitRegister = async (e) => {
    e.preventDefault();

    let res = await register(emailReg, passwordReg);
    if (res.success) {
      setToken(res.token);
      setEndpoint(emailReg);
    }
    console.log(res);
  }

  const submitLogin = async (e) => {
    e.preventDefault();
    const res = await login(emailLog, passwordLog, 'form');
    console.log(res);

    if (res.success) {
      setIsLoggedIn(true);
      setToken(res.token)
    }
  }

  const handleLogout = async () => {
    let res = await logout();
    console.log(res);
    if (res.success) {
      changeTitle(false);
      setToken('');
    }
  }

  const magicLink = async (e) => {
    e.preventDefault();

    let res = await loginEmail(magicEmail);
    if (res.success) {
      const token = res.token;
      const email = res.email;
      setToken(token);
      setEndpoint(email)
    }
    console.log(res);
  }

  const handle = async () => {
    const res = await remove(token);
    console.log(res);
}

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      {!isLoggedIn ? <>
        <h2>Register</h2>
        <form onSubmit={submitRegister}>
          <label >Email:</label>
          <input onChange={(e) => setEmailReg(e.target.value)} type="text" name="email" value={emailReg} />
          <label >Password:</label>
          <input onChange={(e) => setPasswordReg(e.target.value)} type="text" name="password" value={passwordReg} />
          <input type="submit" value="Submit" />
        </form>
        <h2>Login</h2>
        <form onSubmit={submitLogin} >
          <label>Email:</label>
          <input onChange={(e) => setEmailLog(e.target.value)} type="text" name="email" value={emailLog} />
          <label >Password:</label>
          <input onChange={(e) => setPasswordLog(e.target.value)} type="text" name="password" value={passwordLog} />
          <input type="submit" value="Submit" />
        </form>
        <Social className="social" changeTitle={changeTitle} submitLogin={login} isLoggedIn={isLoggedIn} />
        <form onSubmit={magicLink} >
          <label>Email:</label>
          <input onChange={(e) => setMagicEmail(e.target.value)} type="text" name="email" value={magicEmail} />
          <button>Magic Link</button>
        </form>
      </> :
        <> <h1>{isLoggedIn ? 'Logged In' : 'Logged Out'}</h1>
          <button onClick={handle} >Delete</button>
          <button className="social" onClick={handleLogout} type="submit">Logout!</button>
        </>
      }
      <br></br>
      <Link to='/email'>EMAIL</Link>
    </>
  )
}

export default Home;