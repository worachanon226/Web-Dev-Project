let API = {
  endpoint: "https://api2.paleumm.com",
  path: {
    register: "/Auth/register",
    login: "/Auth/login",
    createTask: "/Task/create",
    setAvailable: "/Task/setAvailable",
    setConfirmMenu: "/Task/setConfirmMenu",
    addMenu: "/Task/addMenu",
    getTask: "/Task/getTask",
    getTasks: "/Task/getTasks",
    getMenus: "/Task/getMenusTask",
    deleteMenu: "/Task/deleteMenu",
    deleteTask: "/Task/deleteTask",
    getCanteenData: "/Canteen/getCanteensData",
    getUserInfo: "/User/getUser",
  },
};
export default API;
