import API from "./API";

let { endpoint, path } = API;
let submitLogin = (event) => {
  event.preventDefault();
  let id = event.target[0].value;
  let password = event.target[1].value;
  let res = fetch(endpoint.concat(path.Login), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: { id, password },
  }).then((res) => {
    console.log(res);
  });
};

let submitSignup = (event) => {
  event.preventDefault();
  let [id, name, last, password, phone] = event.target;
  let res = fetch(endpoint.concat(path.register), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: {
      id: id.value,
      name: name.value,
      lastname: last.value,
      password: password.value,
      phone: phone.value,
    },
  }).then((res) => {
    console.log(res);
  });
};

let verifyPassword = () => {
  var p = document.getElementById("pass").value;
  var cp = document.getElementById("cpass").value;
  if (p != cp)
    document.getElementById("submit").disabled = true;
  else
    document.getElementById("submit").disabled = false;

}
export { submitLogin, submitSignup ,verifyPassword};
