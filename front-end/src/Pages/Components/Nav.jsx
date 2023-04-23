import React from 'react'
import { Outlet, Link } from "react-router-dom";


function Nav() {
    // const mystyle = {
    //     color: "white",
    //     backgroundColor: "#FA8072",
    //     padding: "10px",
    //     font: "soid",
    //     fontFamily: "Arial",
    //     boxShadow: '1px 2px 9px #F4AAB9',
    //     padding: '10px 30px'
    // }

    // const mystyleLogin = {
    //     color: "#FA8072",
    //     padding: "10px",
    //     font: "soid",
    //     fontFamily: "Arial",
    //     backgroundColor: "white",
    //     borderRadius: "10px",

    // }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Hew-Hew</a>

                    <div class="d-flex">
                        <div class="nav-item me-2">
                            <a type="button" class="btn btn btn-outline-secondary" href="/Signup">Sign Up</a>
                        </div>
                        <div class="nav-item">
                            <a type="button" class="btn btn btn-success" href="/login">Login</a>
                        </div>

                    </div>
                </div>


                {/* <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>

                    <Link to="/" className='navbar'>
                        <h1 style={{ fontSize: '1.5em' }} to="/" >Hew-Hew</h1>
                    </Link>

                    <Link to="/login">
                        <h1 to="/" style={mystyleLogin}>Login</h1>
                    </Link>
                    <Link to="/Signup">
                        <h1 to="/" style={mystyleLogin}>Sign Up</h1>
                    </Link>

                </div> */}
            </nav>
            <Outlet />
        </>
    )
}

export default Nav

