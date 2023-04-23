import React, { useState } from "react";
import { AddHostModal } from "./Components/createHostModal";
import Item from "./Components/Item";
import { getTasks } from "../Controller/HostController";
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

  let [task, setTask] = useState();
  console.log(task);
  if(task === undefined){
    getTasks(setTask);
    return <div>Loading</div>
  }
  return (
    <div style={containerStyle}>
      <AddHostModal callback={setTask} />
      <button
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      <div style={hostListcontain}>
        {task.map((e) => (
          <Item key={e.Name} {...e} />
        ))}
      </div>
    </div>
  );
}

export default Host;
