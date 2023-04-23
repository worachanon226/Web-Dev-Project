import React, { useState } from "react";
import Item from "./Components/Item";
import Task from "../Controller/test/Task.json";
import Task2 from "../Controller/test/Task2.json";
function Guest() {
  let containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };

  let [task, setTask] = useState([Task, Task2]);
  return (
    <div style={containerStyle}>
      <h2>Online Host</h2>
      {task.map((e) => (
        <Item key={e.Name} {...e} />
      ))}
    </div>
  );
}

export default Guest;
