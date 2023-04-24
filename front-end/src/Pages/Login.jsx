import React from "react"
import { IoFastFood } from "react-icons/io5"
import './style/Login.css'
import { submitLogin } from "../Controller/AuthController";
function Login() {
  return (
    <>
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>

    

      {/* <div className="col-md-auto">
          <img className="img-fluid" src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg"></img>
        </div> */}

      <form onSubmit={submitLogin}>

   
      <h3>Login</h3>
        <div className="form-floating mb-4">
          <div>

          <label htmlFor="id">User ID
          <i className="far fa-clone">
                    <IoFastFood />
                  </i>
          </label>
          </div>
         
          <input type="id" className="form-control" id="floatingInput" />
        </div>

        <div className="form-floating mb-4">

          <label htmlFor="pwd">Password</label>
          <input type="password" className="form-control" id="floatingPassword" />
        </div>


        <div className="btn">
        <button type="submit" className="btn btn-danger mb-3">Submit</button>
        </div>

        <div className="create">
          <span>Don't have an account? </span>
          <a className="text-decoration" href="/Signup">Create</a>
        </div>

      </form>
    </>
  )
}

export default Login;
