import React, { useState } from "react";
import Item from "./Components/Item";
import { getTasks } from "../Controller/GuestController";
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
    background:'green'
  };

  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <div>Loading</div>;
  }
  return (
    <div style={containerStyle}>
      <button
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      <div style={hostListcontain}>
        {task.map((e) => (
          <Item
            key={e.id}
            data={e}
          />
        ))}
      </div>
    </div>
  );
}
export default Host;
