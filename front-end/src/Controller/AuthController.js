import API from "./API";

let { endpoint, path } = API;
let submitLogin = async (event) => {
  event.preventDefault();
  let id = event.target[0].value;
  let password = event.target[1].value;
  let res = await fetch(endpoint.concat(path.login), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ id, password }),
  });
  if (res.ok) {
    res = await res.json();
    // set token here
    console.log(res);
  }
};

let submitSignup = async (event) => {
  event.preventDefault();
  let [id, name, last, password, phone] = event.target;
  let res = await fetch(endpoint.concat(path.register), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      id: id.value,
      name: name.value,
      lastname: last.value,
      password: password.value,
      phone: phone.value,
    }),
  });
  if (res.ok) {
    res = await res.json();
    // set token here
    console.log(res);
  }
};

let verifyPassword = () => {
  var p = document.getElementById("pass").value;
  var cp = document.getElementById("cpass").value;
  if (p !== cp) document.getElementById("submit").disabled = true;
  else document.getElementById("submit").disabled = false;
};
export { submitLogin, submitSignup, verifyPassword };
