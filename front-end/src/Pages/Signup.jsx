import React, { useState } from 'react'
import { submitSignup } from '../Controller/AuthController'

function Singup() {
  
  return (
    <form onSubmit={submitSignup}>
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
  </form>
  )
}

export default Singup
