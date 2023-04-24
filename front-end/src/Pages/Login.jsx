import React from "react"
import { FaUser } from "react-icons/fa"
import './style/Login.css'
import { submitLogin } from "../Controller/AuthController";
import {RiLockPasswordFill} from 'react-icons/ri'

function Login() {
  return (
    <>
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>

      <div className="fromcard">


      <form onSubmit={submitLogin}>
    

          <h3>Login</h3>
          <div className="form-floating">
              <div>
              <label  class='textlogin' htmlFor="id">
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
              <label  class='textlogin' htmlFor="id">
                <RiLockPasswordFill size={20} />
                Password
                </label>
                </div>
          </div>
          <div>
            <input type="id" className="formcontrol" id="floatingInput" />
          </div>



          <div className="btnbg">
            <button type="submit" className="btn btn-danger mb-3">Submit</button>
          </div>

          <div className="create">
            <span>Don't have an account? </span>
            <a className="text-decoration" href="/Signup">Create</a>
          </div>

        </form>
      </div>
    </>
  )
}

export default Login;
