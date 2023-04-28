import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getTask } from "../../Controller/HostController";
import List from "./List";
import './style/ManageHost.css'


const ManageHost = () => {
  let [task, setTask] = useState();
  let { hostId } = useParams();
  if (task === undefined) {
    getTask(hostId, setTask);
    return <div>Loading</div>;
  }
  return (
    <div className="containerM">

      <h2>Menu</h2> 

      <div className="Card"></div>
      <div className="Card"></div>
      <div className="Card"></div>

      {task.menus &&
        task.menus.map((e) => (
          <List key={e.id} props={e} callback={setTask} hostId={hostId}></List>
        ))}
      {task.menus === [] && <h3>Waiting for request Menu</h3>}
    </div>

  );
};

export default ManageHost;