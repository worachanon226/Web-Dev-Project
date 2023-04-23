import API from "./API";
let { endpoint, path } = API;
let getTasks = async (callback) => {
  let res = await fetch(endpoint.concat(path.getTasks), {
    method: "GET",
  });
  let response = await res.json();
  console.log(response);
  callback(response);
};

let createTask = async (data, callback) => {
  let res = await fetch(endpoint.concat(path.createTask), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });
  if (res.ok) {
    getTasks(callback);
  }
};
let deleteTask = async (id) => {
  const res = await fetch(
    endpoint.concat(path.deleteTask) +
      "?" +
      new URLSearchParams(
        {
          id,
        },
        {
          method: "DEL",
        }
      )
  ).catch(err => {console.log("err");})
  
};
export { createTask, getTasks, deleteTask };
