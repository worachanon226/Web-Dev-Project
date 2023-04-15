import React from 'react'
import { Outlet,Link } from "react-router-dom";
function Nav() {
  return (
    <>
    {/* แทนที่ไปตรงนี้ */}
    <Link to="/">Nav</Link>
    {/* ถึงนี่ */}

    {/* อ่ย่าลบ Outlet */}
    <Outlet/>
    </>
  )
}

export default Nav