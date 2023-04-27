import React, { createContext, useContext, useState } from "react";
import { node } from "prop-types";

const UserContext = createContext({});

export let useUserContext = () => useContext(UserContext);

let UserProvider = ({ children }) => {
  // {
  //   id: "",
  //   name: "",
  //   lastname: "",
  //   email: "",
  //   phone: "",
  // }
  const [user, setUser] = useState();
 const userStore = {
    user,setUser
 }
  return <UserContext.Provider value={userStore}>{children}</UserContext.Provider>

};
UserProvider.propTypes={
    children:node.isRequired
}
export default UserProvider;