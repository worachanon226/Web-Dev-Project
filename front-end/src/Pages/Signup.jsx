import React, { useState } from 'react'
import API from "../Controller/API"
import axios from "axios"

function Singup() {
  let { endpoint, path } = API
  let submitHandler = (event) => {
    event.preventDefault()
    let [id, name, last, password, phone] = event.target
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
    <div>
    </div>
    // <form onSubmit={submitHandler}>
    //   <h3>Sign Up</h3>
    //   <div className="mb-3">
    //     <label>ID</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="First name"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label>First Name</label>
    //     <input type="text" className="form-control" placeholder="Last name" />
    //   </div>
    //   <div className="mb-3">
    //     <label>Last Name</label>
    //     <input
    //       className="form-control"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       className="form-control"
    //       placeholder="Enter password"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label>Phone</label>
    //     <input
    //       type="password"
    //       className="form-control"
    //       placeholder="Enter password"
    //     />
    //   </div>
    //   <div className="d-grid">
    //     <button type="submit" className="btn btn-primary">
    //       REGISTER NOW
    //     </button>
    //   </div>
    //   <p className="forgot-password text-right">
    //     Already registered <a href="/sign-in">sign in?</a>
    //   </p>
    // </form>
  )
}

export default Singup
