import React, { useState } from 'react'
import API from "../Controller/API"
import axios from "axios"

function Singup() {
  let { endpoint, path } = API
  let verifyPassword = () => {
    var p = document.getElementById("pass").value;
    var cp = document.getElementById("cpass").value;
    if (p != cp)
      document.getElementById("submit").disabled = true;
    else
      document.getElementById("submit").disabled = false;

  }
  let submitHandler = (event) => {
    event.preventDefault()
    let [id, name, last, password, cpass, phone] = event.target
    console.log(id.value,name.value,last.value,password.value,cpass.value);
    let res = fetch(endpoint.concat(path.register), {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify({
        Id: id.value,
        Name: name.value,
        Lastname: last.value,
        Password: password.value,
        Phone: phone.value
      })
    }).then((res) => { console.log(res); })
  }
  return (
    <div className="d-flex mt-5 align-self-center justify-content-center">
      <div className="container w-25 border rounded justify-content-md-center">
        <div className="col-md-auto text-center align-self-center">
          <p className="h2">Sign Up</p>
          <form onSubmit={submitHandler}>

            <div className="form-floating mb-4">
              <input type="id" className="form-control" id="id" />
              <label htmlFor="id">User ID</label>
            </div>

            <div className="form-floating mb-4">
              <input type="name" className="form-control" id="name" />
              <label htmlFor="name">First Name</label>
            </div>
            <div className="form-floating mb-4">
              <input type="lastname" className="form-control" id="lastname" />
              <label htmlFor="lastname">Last Name</label>
            </div>

            <div className="form-floating mb-4">
              <input onKeyUp={verifyPassword} type="password" className="form-control" id="pass" />
              <label htmlFor="pwd">Password</label>
            </div>

            <div className="form-floating mb-4">
              <input onKeyUp={verifyPassword} type="password" className="form-control" id="cpass" />
              <label htmlFor="pwd">Confirm Password</label>
            </div>

            <div className="form-floating mb-4">
              <input type="phone" className="form-control" id="phone" />
              <label htmlFor="phone">Phone Number</label>
            </div>

            <button type="submit" className="btn btn-danger mb-3" disabled id="submit">Submit</button>

          </form>

          <div>
            <a>Already have an account? </a>
            <a className="text-decoration-none text-primary" href="/login">Login</a>
          </div>

        </div>
      </div>
    </div>
  )
  {/* <form onSubmit={submitHandler}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>ID</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
        />
      </div>
      <div className="mb-3">
        <label>First Name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
      <div className="mb-3">
        <label>Last Name</label>
        <input
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <label>Phone</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          REGISTER NOW
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form> */}
}

export default Singup;
