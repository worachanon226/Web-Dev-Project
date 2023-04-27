import { getTasks } from "../Controller/GuestController";
import React, { useState } from "react";
import Item from "./Components/Item";
import './style/Guest.css'

function Host() {
  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <div>Loading</div>;
  }
  return (
    <div className='containerStyle'>
      <button className="justify-content-center btnRefresh"
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      <div className="flex-row md:grid hostListcontain">
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