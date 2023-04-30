import API from "./API";
import $ from "jquery";
let { endpoint, path } = API;
let submitLogin = async (id, password, setUserCtx, callback) => {
  let res = await fetch(endpoint.concat(path.login), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ id, password }),
  });
  if (res.ok) {
    res = await res.json();
    if (res.message) {
      setUserCtx(res);
      callback("/", { replace: true });
    } else {
      return res.message;
    }
  }
};

let submitSignup = async (data, setUserCtx, callback) => {
  let res = await fetch(endpoint.concat(path.register), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });
  if (res.ok) {
    res = await res.json();
    if (res.message) {
      setUserCtx(res);
      callback("/", { replace: true });
    } else {
      return res.message;
    }
  }
};

let verifyPassword = () => {
  var p = document.getElementById("pass");
  var cp = document.getElementById("cpass");
  var lb = document.getElementById("pmtPass");
  if (p.value !== cp.value && cp.value !== "") {
    document.getElementById("submit").disabled = true;
    lb.style.visibility = "visible";
    p.style.border = "2px solid red";
    cp.style.border = "2px solid red";
  } else if (p.value === cp.value) {
    document.getElementById("submit").disabled = false;
    lb.style.visibility = "hidden";
    p.style.border = "2px solid green";
    cp.style.border = "2px solid green";
    
  }
};
export { submitLogin, submitSignup, verifyPassword };
