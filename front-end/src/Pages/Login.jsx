import React, { useState } from "react";
import API from "../Controller/API"
import axios from "axios"
function Login() {
  let { endpoint, path } = API
  let submitHandler = async (event) => {
    event.preventDefault();
    let id = event.target[0].value
    let password = event.target[1].value
    let res = await fetch(endpoint.concat(path.login), {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify({ Id:id, Password:password })
    })
    let ress = await res.json()
    console.log(ress);

    // axios.post(endpoint.concat(path.login),{
    //   Id:id, Password:password 
    // }).then((res) => {console.log(res);})
  }
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
    </div>
  );
}

export default Login;
