import API from "./API";

import Task from "./test/Task.json"
let { endpoint, path } = API;
let getTasks = async (callback) => {
  let res = await fetch(endpoint.concat(path.getTasks), {
    method: "GET",
  })
  let response = await res.json();
    callback(response);
;
};

let createTask = async (data, callback) => {
  let res = await fetch(endpoint.concat(path.createTask), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: data,
  }).then((response) => response.json());
  if (res.statusCode === 200) {
    let resForTask = await fetch(endpoint.concat(path.getTasks), {
      method: "GET",
    }).then((response) => response.json());
    callback(resForTask);
  }
};

export { createTask, getTasks };
