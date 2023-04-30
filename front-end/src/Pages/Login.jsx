import { submitLogin } from "../Controller/AuthController";
import { RiLockPasswordFill } from "react-icons/ri";
import { useUserContext } from "../userContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./style/Login.css";
import { useEffect } from "react";
import $ from "jquery";
import { useLocation } from "react-router-dom";

function Login() {
  let { setUser } = useUserContext();
  let navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    $("#LoginBtn").trigger("click");
  }, [location]);

  return (
    <>
      <div className="background w-100">
        <div className="fromcard">
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              let id = event.target[0].value;
              let password = event.target[1].value;
              let ok = await submitLogin(id, password, setUser, navigate);
              if (ok === false) {
                document.getElementById("promttext").style.visibility = "visible";
              }
            }}
          >
            <h3>Sign in</h3>
            <div className="form-floating">
              <div>
                <label class="textlogin" htmlFor="id">
                  <FaUser size={20} gap />
                  User ID
                </label>
              </div>
              <div>
                <input type="id" className="formcontrol" id="floatingInput" />
              </div>
            </div>

            <div className="form-floating">
              <div>
                <label class="textlogin" htmlFor="id">
                  <RiLockPasswordFill size={20} />
                  Password
                </label>
              </div>
            </div>
            <div>
              <input
                type="password"
                className="formcontrol"
                id="floatingInput"
              />
            </div>
            
            <div id = "promttext" className="mt-2 text-danger" style={{visibility:"hidden"}}> 
              Invalid User ID or Password
            </div>

            <div className="btnbg">
              <button type="submit" className="btn btn-danger mb-3">
                Submit
              </button>
            </div>

            <div className="create text-center">
              <span>Don't have an account? </span>
              <Link className="text-decoration" to="/signup">
                Create
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
