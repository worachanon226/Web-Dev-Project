import React, { createContext, useContext, useState, useEffect } from "react";
import { node } from "prop-types";
// import { useCookies } from "react-cookie";


const UserContext = createContext({});

export let useUserContext = () => useContext(UserContext);

let UserProvider = ({ children }) => {
//   const [cookies, setCookie,removeCookie] = useCookies(["user-cookies"]);
//   const [user, setUser] = useState(cookies["user-cookies"]);
  useEffect(() => {
    if(user !== undefined){
      setCookie("user-cookies",user)
    }
    if(user === undefined){
      removeCookie("user-cookies")
    }
  },[user]);
  const userStore = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={userStore}>{children}</UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: node.isRequired,
};
export default UserProvider;