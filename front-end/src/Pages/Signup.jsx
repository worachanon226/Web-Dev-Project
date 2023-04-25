import './style/Signup.css'
import React from 'react'



// import { submitSignup,verifyPassword } from '../Controller/AuthController'

function Signup() {

  return (
    <div className="fromCard">
      <form>
        <h3>Sign Up</h3>
        <div className="formfloating">
          <div>
            <label class='textSignup' htmlFor="id">
     
              User ID
            </label>
          </div>
        </div>
        <div>
          <input type="id" className="formControl" id="floatingInput" />
        </div>

        <div className="formfloating">
          <div>
            <label class='textSignup' htmlFor="id">
      
              First Name
            </label>
          </div>
        </div>
        <div>
          <input type="id" className="formControl" id="floatingInput" />
        </div>

        <div className="formfloating">
          <div>
            <label class='textSignup' htmlFor="id">
    
              Last Name
            </label>
          </div>
        </div>
        <div>
        {/* <input onKeyUp={verifyPassword} type="password" className="formControl" id="pass" /> */}
        <input type="password" className="formControl" id="pass" />
        </div>

        <div className="formfloating">
          <div>
            <label class='textSignup' htmlFor="id">
     
              Password
            </label>
          </div>
        </div>
        <div>
          <input type="id" className="formControl" id="floatingInput" />
        </div>

        <div className="formfloating">
          <div>
            <label class='textSignup' htmlFor="id">
     
              Confirm Password
            </label>
          </div>
        </div>
        <div>
        {/* <input onKeyUp={verifyPassword} type="password" className="formControl" id="cpass" /> */}
          <input type="id" className="formControl" id="floatingInput" />
        </div>

        <div className="formfloating">
          <div>
            <label class='textSignup' htmlFor="id">
      
              Phone Number
            </label>
          </div>
        </div>
        <div>
        {/* <input onKeyUp={verifyPassword} type="password" className="formControl" id="cpass" /> */}
          <input type="id" className="formControl" id="floatingInput" />
        </div>


        <div className="btnbgsignup">
            <button type="submit" className="btn btn-danger">Submit</button>
          </div>
      </form>
      <div>
        <a>Already have an account? </a>
        <a className="text-decoration-none text-primary" href="/login">Login</a>
      </div>
    </div >

  )
}

export default Signup;
