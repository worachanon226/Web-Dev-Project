import React from 'react'
import { Outlet,Link } from "react-router-dom";
function Nav() {
  return (
    <>
    <Link to="/">Nav</Link>

    {/* อ่ย่าลบ Outlet */}
    <Outlet/>
    </>
  )
}

export default Nav