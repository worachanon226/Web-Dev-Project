import { getTasks } from "../Controller/GuestController";
import React, { useState } from "react";
import Item from "./Components/Item";
import './style/Guest.css'
import Loading from "./Components/Loading";

function Host() {

  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <Loading/>
  }
  return (
    <div className='containerStyleGuest'>
     <button className="justify-content-center btnRefresh"
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      <div className="flex-row hostListcontainGuest">
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