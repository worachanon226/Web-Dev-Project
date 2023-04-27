import React from "react";
import { submitSignup, verifyPassword } from "../Controller/AuthController";
import { useNavigate } from "react-router-dom";
import {useUserContext} from "../userContext"

function Singup() {
  let navigate = useNavigate()
  let {setUser} = useUserContext()
  return (
    <div className="d-flex mt-5 align-self-center justify-content-center">
      <div className="container w-25 border rounded justify-content-md-center">
        <div className="col-md-auto text-center align-self-center">
          <p className="h2">Sign Up</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              let [id, name, last, password, phone] = event.target;
              console.log(id.value);
              submitSignup({
                id: id.value,
                name: name.value,
                lastname: last.value,
                password: password.value,
                phone: phone.value,
              },setUser,navigate);
            }}
          >
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
              <input
                onKeyUp={verifyPassword}
                type="password"
                className="form-control"
                id="pass"
              />
              <label htmlFor="pwd">Password</label>
            </div>

            <div className="form-floating mb-4">
              <input
                onKeyUp={verifyPassword}
                type="password"
                className="form-control"
                id="cpass"
              />
              <label htmlFor="pwd">Confirm Password</label>
            </div>

            <div className="form-floating mb-4">
              <input type="phone" className="form-control" id="phone" />
              <label htmlFor="phone">Phone Number</label>
            </div>

            <button
              type="submit"
              className="btn btn-danger mb-3"
              disabled
              id="submit"
            >
              Submit
            </button>
          </form>

          <div>
            <a>Already have an account? </a>
            <a className="text-decoration-none text-primary" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* <form onSubmit={submitHandler}>
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
    </form> */
  }
}

export default Singup;
