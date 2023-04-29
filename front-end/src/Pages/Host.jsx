import { getTasks, deleteTask } from "../Controller/HostController";
import { AddHostModal } from "./Components/createHostModal";
import { useUserContext } from "../userContext";
import React, { useState } from "react";
import Item from "./Components/Item";
import './style/Host.css'




function Host() {
  let { user } = useUserContext();

  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <div>Loading</div>;
  }
  return (
    <div className="containerStyle">
      <AddHostModal callback={setTask} />
      <button className="btHostRe"
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      
      <div className='hostListcontainHost'>
        {task.map((e) => {
          if (e.userId === user.id) {
            return (
              <Item
                key={e.id}
                data={e}
                control={
                  <Control
                    ownerId={e.userId}
                    id={e.id}
                    user={user}
                    callback={setTask}
                  />
                }
              />
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
}
let Control = ({ id, callback }) => {
  return (
    <button className="btHostDe"
      onClick={async () => {
        await deleteTask(id);
        getTasks(callback);
      }}
    >
      Delete
    </button>
  );
};
export default Host;
