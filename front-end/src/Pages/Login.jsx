import React from "react";
import { submitLogin } from "../Controller/AuthController";
function Login() {
  return (
    <div className="d-flex mt-5 align-self-center justify-content-center">
      <div className="container w-75 row border rounded justify-content-md-center">
        <div className="col-md-auto">
          <img className="img-fluid" src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg"></img>
        </div>
        <div className="col-md-auto text-center align-self-center">
          <p className="h2">Login</p>
          <form onSubmit={submitLogin}>

            <div className="form-floating mb-4">
              <input type="id" className="form-control" id="floatingInput" />
              <label htmlFor="id">User ID</label>
            </div>

            <div className="form-floating mb-4">
              <input type="password" className="form-control" id="floatingPassword" />
              <label htmlFor="pwd">Password</label>
            </div>

            <button type="submit" className="btn btn-danger mb-3">Submit</button>

          </form>

          <div>
            <a>Don't have an account? </a>
            <a className="text-decoration-none text-primary" href="/Signup">Create</a>
          </div>

        </div>
      </div>
      {/* <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <form onSubmit={submitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#FA8072",
            alignItems: "center",
            width: "40%",
          }}
        >
          <h3>Sign In</h3>
          <div style={{ padding: "0.5rem" }}>
            <div
              className="mb-3"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label>Email address</label>
              <input
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div
              className="mb-3"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div> */}
    </div>
  )
}

export default Login;
