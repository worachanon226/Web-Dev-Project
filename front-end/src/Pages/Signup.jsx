import React from "react";
import { submitSignup, verifyPassword } from "../Controller/AuthController";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../userContext";
import "./style/Signup.css";
import { useEffect } from "react";
import $ from "jquery";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  let { setUser } = useUserContext();
  const location = useLocation();
  useEffect(() => {
    $("#signupBtn").trigger("click");
  }, [location]);

  return (
    <div className="Background w-100">
      <div className="fromCard">
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            let [id, name, last, password, cpassword, phone] = event.target;

            let ok = await submitSignup(
              {
                id: id.value,
                name: name.value,
                lastname: last.value,
                password: password.value,
                phone: phone.value,
              },
              setUser,
              navigate
            );
            if (!ok) {
              document.getElementById("UserIdInput").style.border =
                "2px solid red";
              document.getElementById("promptId").style.visibility = "visible";
            }
          }}
        >
          <h3>Sign Up</h3>
          <div className="formfloating">
            <div>
              <label class="textSignup" htmlFor="id">
                User ID
              </label>
            </div>
          </div>

          <div>
            <input
              type="id"
              id="UserIdInput"
              className="formControl m-0"
              pattern="[0-9]{8}"
              placeholder="StudentID 64xxxxxx"
              required
            />
            <div
              id="promptId"
              className="text-danger "
              style={{ visibility: "hidden", fontSize: 12 }}
            >
              Invalid User ID or Password
            </div>
          </div>

          <div className="formfloating">
            <div>
              <label class="textSignup" htmlFor="id">
                First Name
              </label>
            </div>
          </div>
          <div>
            <input type="input" required id="fnInput" className="formControl" />
          </div>

          <div className="formfloating">
            <div>
              <label class="textSignup" htmlFor="id">
                Last Name
              </label>
            </div>
          </div>
          <div>
            <input type="input" required id="lnInput" className="formControl" />
          </div>
          <div className="formfloating">
            <div>
              <label class="textSignup" htmlFor="id">
                Password
              </label>
            </div>
          </div>
          <div>
            <input
              onKeyUp={verifyPassword}
              required
              type="password"
              className="formControl"
              id="pass"
            />
          </div>

          <div className="formfloating">
            <div>
              <label class="textSignup" htmlFor="id">
                Confirm Password
              </label>
            </div>
          </div>
          <div>
            <input
              onKeyUp={verifyPassword}
              type="password"
              className="formControl m-0"
              id="cpass"
              required
            />
            <div
              id="pmtPass"
              className="text-danger "
              style={{ visibility: "hidden", fontSize: 12 }}
            >
              Password is not match
            </div>
          </div>

          <div className="formfloating">
            <div>
              <label class="textSignup" htmlFor="id">
                Phone Number
              </label>
            </div>
          </div>
          <div>
            <input
              type="tel"
              placeholder="0909090909"
              pattern="[0-9]{10}"
              required
              className="formControl"
            />
          </div>

          <div className="btnbgsignup mt-1">
            <button
              type="submit"
              className="btn btn-danger"
              id="submit"
              disabled
            >
              Submit
            </button>
          </div>
        </form>
        <div className="textSign text-center">
          <a className="text-decoration-none text-black">Already have an account? </a>
          <Link className="text-decoration" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Signup;
