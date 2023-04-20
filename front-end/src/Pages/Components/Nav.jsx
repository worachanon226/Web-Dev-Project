import React from 'react'
import { Outlet,Link } from "react-router-dom";
function Nav() {
    const mystyle = {
        color: "white",
    backgroundColor: "#FA8072",
    padding: "10px",
    font: "soid",
    fontFamily: "Arial",
    boxShadow: '1px 2px 9px #F4AAB9',
    padding:'10px 30px'
    }

    const mystyleLogin = {
        color: "#FA8072",
    padding: "10px",
    font: "soid",
    fontFamily: "Arial",
    backgroundColor:"white",
    borderRadius:"10px",

    }
  return (
    <>
        <nav style={mystyle}>
    <ul style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
        <li>
            <Link to="/" className='navbar'>
                <h1 style={{fontSize:'1.5em'}}to="/" >Hew-Hew</h1>
            </Link>
        </li>
        <li>
            <Link to="/login">
                <h1 to="/" style={mystyleLogin}>Login</h1>
            </Link>
        </li>
    </ul>
</nav>
    <Outlet/>
    </>
  )
}

export default Nav

