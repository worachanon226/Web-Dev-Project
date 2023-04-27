import { getTasks, deleteTask } from "../Controller/HostController";
import { AddHostModal } from "./Components/createHostModal";
import user from "../Controller/test/User.json"
import React, { useState } from "react";
import Item from "./Components/Item";
import './style/Host.css'

function Host() {
  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <div>Loading</div>;
  }
  return (
    <div className="containerStyle">
      <AddHostModal callback={setTask} />
      <button className="cardHost"
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      <div className='hostListcontain' >
        {task.map((e) => {
          if (e.userId === user[0].id) {
            return (
              <Item
                key={e.id}
                data={e}
                control={
                  <Control
                    ownerId={e.userId}
                    id={e.id}
                    user={user[0]}
                    callback={setTask}
                  />
                }
              />
            );
          }
          return <></>
        })}
      </div>
    </div>
  );
}
let Control = ({ ownerId, id, user, callback }) => {
  if (ownerId === user.id) {
    return (
      <button style={{ background: 'red' }}
        onClick={async () => {
          await deleteTask(id);
          getTasks(callback);
        }}
      >
        Delete
      </button>
    );
  }
  return;
};
export default Host;