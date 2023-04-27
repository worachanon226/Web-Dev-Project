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
    display:'grid',     
    gridTemplateColumns:'1fr 1fr',
    gridAutoRow:'200px',
    gap:'20px',
    justifyItems: "center",
    minHeight: "50%",
    height: "fit-content",
    width: "80%",
    borderRadius:"20px",
  };

  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <div>Loading</div>;
  }
  return (
    <div style={containerStyle}>
      <button className="justify-content-center shadow-sm p-2 mb-5 rounded bg-teal-200"
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      <div className="flex-row md:grid" style={hostListcontain}>
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