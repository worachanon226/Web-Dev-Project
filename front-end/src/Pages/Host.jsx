import React, { useState } from "react";
import { AddHostModal } from "./Components/createHostModal";
import Item from "./Components/Item";
import { getTasks, deleteTask } from "../Controller/HostController";
import { useUserContext } from "../userContext";
function Host() {
  let {user} =useUserContext()
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
    background: "green",
  };

  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <div>Loading</div>;
  }
  return (
    <div style={containerStyle}>
      <AddHostModal callback={setTask} />
      <button className="d-flex rounded justify-content-center shadow-sm p-2 mb-5 rounded" style={{background:'#FA8072', width:'90px' }}
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      <div style={hostListcontain} >
        {task.map((e) => {
          if (e.userId === user.id) {
            return (
              <Item
                key={e.id}
                 data = {e}
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
          return <></>
        })}
      </div>
    </div>
  );
}
let Control = ({ ownerId, id, user, callback }) => {
  if (ownerId === user.id) {
    return (
      <button style={{background:'red'}}
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