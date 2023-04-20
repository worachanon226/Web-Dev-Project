import React, {Component} from 'react'
import { Outlet, Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { IoFastFood } from 'react-icons/io5';
import { SiGnuprivacyguard } from 'react-icons/si';


function Nav() {
  
  const mystyle = {
    color: "white",
    backgroundColor: "#FA8072",
    padding: "10px",
    font: "soid",
    fontFamily: "Arial",
    boxShadow: '1px 2px 9px #F4AAB9',
    padding: '10px 30px'
  }

  const navbarItemsStyle = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'row', 
    justifyItems: 'right', 
    background: 'green'
  }

  const mystyleLogin = {
    // color: "#FA8072",
    font: "soid",
    fontFamily: "Arial",
    // backgroundColor: "white",
    borderRadius: "10px",


  }
  return (
    <>
      <nav style={mystyle}>

        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <Link to="/" className='navbar'>
            <h1 style={{ fontSize: '1.5em', cursor: 'pointer', textDecoration: 'none' }} to="/" >Hew-Hew</h1>
          </Link>
        
          
          <div style={{ display: 'flex', listStyle: 'none', alignItems: 'center', justifyItems: 'flex-end', gap: '10px'}}>

            <Link style={ navbarItemsStyle} to='/'>
              <a><AiFillHome style={{ margin: '2px' }} /></a>
              <h2>Home</h2>
            </Link>

            <Link style={ navbarItemsStyle } to='/'>
              <a><IoFastFood style={{ margin: '2px' }} /></a>
              <h2>Service</h2>
            </Link>

            <Link style={ navbarItemsStyle } to='/login'>
              <a><SiGnuprivacyguard style={{ margin: '2px' }} /></a>
              <h2>Sign Up</h2>
            </Link>
          </div>

        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Nav



