import React from 'react'
import { Outlet,Link } from "react-router-dom";
function Nav() {
  return (
    <>
    <Link to="/">Nav</Link>
    <Outlet/>
    </>
  )
}

export default Nav