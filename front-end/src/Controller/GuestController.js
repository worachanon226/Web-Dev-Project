import API from "./API";
let { host, path } = API;

let joinHost = async (TaskID, UserID) => {
  let req = await fetch(host.concat(path.joinHost), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: TaskID,
  });
  if (req.ok) {
    //do something
  }
};

let createMenu = async (TaskID, UserID, Menu) => {
  let req = await fetch(host.concat(path.createMenu), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      TaskID,
      UserID,
      Menu,
    },
  });
  if (req.ok) {
    //do something
  }
};

export {
    createMenu,
    joinHost
}