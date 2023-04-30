import API from "./API";
let { endpoint, path } = API;
let getTask = async (id, callback) => {
  let res = await fetch(endpoint.concat(path.getTask) + "?id=" + id, {
    method: "GET",
  });
  let response = await res.json();
  callback(response.menus);
  return response.available
};
let getTasks = async (callback) => {
  let res = await fetch(endpoint.concat(path.getTasks), {
    method: "GET",
  });
  let response = await res.json();
  callback(response);
};
let getMenus = async (id, callback) => {
  let res = await fetch(endpoint.concat(path.getMenus) + "?id=" + id, {
    method: "GET",
  });
  let response = await res.json();
  console.log(response);
  callback(response);
};
let addMenu = async (TaskID, data, callback) => {
  let req = await fetch(endpoint.concat(path.addMenu) + "?id=" + TaskID, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data) ,
  });
  if (req.ok) {
    getTask(TaskID, callback);
  }
};
let deleteMenu = async (taskId,menuId) => {
  await fetch(endpoint.concat(path.deleteMenu) + "?TaskId=" + taskId + "&MenuId="+menuId, {
    method: "DELETE",
  });
}
export {getTask,getTasks,addMenu,getMenus,deleteMenu};
