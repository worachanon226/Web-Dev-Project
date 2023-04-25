// import { submitLogin } from "../Controller/AuthController";
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"
import './style/Login.css'
import React from "react"

function Login() {
  return (
    <>

      <div className="fromcard">
        <form>
          {/* <form onSubmit={submitLogin}> */}

          <h3>Login</h3>
          <div className="form-floating">

            <div>
              <label class='textlogin' htmlFor="id">
                <FaUser size={20} gap />
                User ID
              </label>
            </div>
          </div>
          <div>
            <input type="id" className="formcontrol" id="floatingInput" />
          </div>

          <div className="form-floating">
            <div>
              <label class='textlogin' htmlFor="id">
                <RiLockPasswordFill size={20} />
                Password
              </label>
            </div>
          </div>
          <div>
            <input type="id" className="formcontrol" id="floatingInput" />
          </div>

          <div className="btnbg">
            <button  type="submit" className="btn btn-danger mb-3" href='/front-end/src/Pages/Home.jsx'>Submit</button>
          </div>

          <div className="create">
            <span>Don't have an account? </span>
            <Link className="text-decoration" to="/signup">Create</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
