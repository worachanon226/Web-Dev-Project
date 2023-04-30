import { getTasks } from "../Controller/GuestController";
import React, { useState } from "react";
import Item from "./Components/Item";
import './style/Guest.css'
import Loading from "./Components/Loading";
import { useUserContext } from "../userContext";
function Host() {
  let {user} = useUserContext()
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
        REFRESH
      </button>
      <div className="flex-row hostListcontainGuest">
        {task.filter(e=>e.userId !== user.id).map((e) => (
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