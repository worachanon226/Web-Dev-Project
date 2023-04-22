import React, { useState } from "react";
import { AddHostModal } from "./Components/createHostModal";
import Item from "./Components/Item";
import API from "../Controller/API";
import taskTest from "../Controller/test/Task.json";
import taskTest2 from "../Controller/test/Task2.json";
function Host() {
  let containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };
  let hostListcontain = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "50%",
    height: "fit-content",
    width: "80%",
    border: "2px solid",
    borderRadius: "20px",
  };
  let listHost = {
    height: "10%",
    width: "90%",
    border: "1px solid",
    borderRadius: "20px",
    margin: "10px 0",
  };

  let [task, setTask] = useState([taskTest, taskTest2]);
  let { endpoint, path } = API;
  let handleTask = async (data, callback) => {
    // let res = await fetch(endpoint.concat(path.createTask), {
    //   headers: { "Content-Type": "application/json" },
    //   method: "POST",
    //   //TODO:เปลี่ยน UserId ให้เอาจาก Context
    //   body: { id:data.id, userId:"1",canteen:data.canteen },
    // }).then(response =>response.json())
    // if (res.statusCode === 200){
    //   let resForTask = await fetch(endpoint.concat(path.getTasks), {
    //     method: "GET",
    //   }).then(response =>response.json())
    // setTask(resForTask);
    // }
  };
  return (
    <div style={containerStyle}>
      <AddHostModal callback={handleTask} />
      <div style={hostListcontain}>
        {task.map((e) => (
          <Item key={e.Name} {...e} />
        ))}
      </div>
    </div>
  );
}

export default Host;
