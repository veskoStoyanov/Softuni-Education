import React, { createContext, useState} from "react";


export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  //OBJECTS
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  
  let [token, setToken] = useState(false);
 


  return (
    <LoginContext.Provider
      value={{
       isLoggedIn,
       setIsLoggedIn,
       token,
       setToken
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;