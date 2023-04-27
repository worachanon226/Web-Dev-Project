import API from "./API";

let { endpoint, path } = API;
let submitLogin = async (id,password,setUserCtx,callback) => {
  
  let res = await fetch(endpoint.concat(path.login), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ id, password }),
  });
  if (res.ok) {
    res = await res.json();
    setUserCtx(res)
    callback("/",{replace:true})
  }
};

let submitSignup = async (data,setUserCtx,callback) => {
  let res = await fetch(endpoint.concat(path.register), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });
  if (res.ok) {
    res = await res.json();
    setUserCtx(res)
    callback("/",{replace:true})
  }
};

let verifyPassword = () => {
  var p = document.getElementById("pass").value;
  var cp = document.getElementById("cpass").value;
  if (p !== cp) document.getElementById("submit").disabled = true;
  else document.getElementById("submit").disabled = false;
};
export { submitLogin, submitSignup, verifyPassword };
