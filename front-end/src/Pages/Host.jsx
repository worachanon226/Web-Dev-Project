import React, { useState } from "react";
import { AddHostModal } from "./Components/createHostModal";
import Item from "./Components/Item";

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

  let [task, setTask] = useState([]);
  
  return (
    <div style={containerStyle}>
      <AddHostModal callback={setTask} />
      <div style={hostListcontain}>
        {task.map((e) => (
          <Item key={e.Name} {...e} />
        ))}
      </div>
    </div>
  );
}

export default Host;
