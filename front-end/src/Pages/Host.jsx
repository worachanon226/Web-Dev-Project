import { getTasks, deleteTask } from "../Controller/HostController";
import { AddHostModal } from "./Components/createHostModal";
import React, { useState } from "react";
import Item from "./Components/Item";

let fakeUser = {
  id: "2",
};
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
    background: "blue",
  };
  let listHost = {
        backgroundColor: "#FFFFFF",
        height: "10%",
        width: "90%",
        border:"1px solid",
        borderRadius: "15px",
        margin:"15px",
      };

  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <div>Loading</div>;
  }
  return (
    <div style={containerStyle}>
      <AddHostModal callback={setTask} />
      <button
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      <div style={hostListcontain}>
        {task.map((e) => {
          if (e.userId === user[0].id) {
            return (
              <Item
                key={e.id}
                 data = {e}
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
      <button
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
