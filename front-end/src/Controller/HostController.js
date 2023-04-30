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
let getTask = async (id, callback) => {
  let res = await fetch(endpoint.concat(path.getTask) + "?id=" + id, {
    method: "GET",
  });
  let response = await res.json();
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
  await fetch(endpoint.concat(path.deleteTask) + "?id=" + id, {
    method: "DELETE",
  });
};
let acceptMenu = async (taskId, menuId) => {
  let res = await fetch(
    endpoint.concat(path.setConfirmMenu) +
      "?TaskId=" +
      taskId +
      "&MenuId=" +
      menuId +
      "&b=" +
      "true",
    {
      method: "POST",
    }
  );
};
let denyMenu = async (taskId, menuId) => {
  let res = await fetch(
    endpoint.concat(path.setConfirmMenu) +
      "?TaskId=" +
      taskId +
      "&MenuId=" +
      menuId +
      "&b=" +
      "false",
    {
      method: "POST",
    }
  );
};
let getCanteenData = async () => {
  let res = await fetch(endpoint.concat(path.getCanteenData));
  if (res.ok) {
    res = await res.json();
    res = res.map((e)=>e.name)
    return res
  }
  return []
};
export { createTask, getTask, getTasks, deleteTask, acceptMenu, denyMenu,getCanteenData };
