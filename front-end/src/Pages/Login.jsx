import React from "react";
import { IoFastFood } from 'react-icons/io5';
import './style/Login.css'

function Login() {
  return (
    <>
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>

      <div className="fromcard">


        <form className="from">


          <h3>Login</h3>
          <div className="form-floating mb-4">

            <label htmlFor="id">User ID
              {/* <i className="far fa-clone">
                  <IoFastFood />
                </i> */}
            </label>
          </div>
          <div>
            <input type="id" className="formcontrol" id="floatingInput" />
          </div>

          <div className="form-floating mb-4">

            <label htmlFor="id">Password
              {/* <i className="far fa-clone">
                <IoFastFood />
              </i> */}
            </label>
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

