import API from "./API";

let { endpoint, path } = API;
let getTasks = async (callback) => {
    console.log("GETTTTT");
  let res = await fetch(endpoint.concat(path.getTasks), {
    method: "GET",
  })
  let response = await res.json();
  console.log(response);
    callback(response);
;
};

let createTask = async (data, callback) => {
  let formData = {
    "id": data.id,
    "userId": data.userId,
    "canteen": data.canteen,
    "menus": [
    ],
    "maxTasks": 0,
    "currentTasks": 0,
    "available": true,
    "totalPrice": 0
  }
  console.log(formData);
  let res = await fetch(endpoint.concat(path.createTask), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body:JSON.stringify(formData),
  }).then((response) => response.json());
  if (res.statusCode === 200) {
    let resForTask = await fetch(endpoint.concat(path.getTasks), {
      method: "GET",
    }).then((response) => response.json());
    callback(resForTask);
  }
};

export { createTask, getTasks };
