import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getTask } from "../../Controller/HostController";
import List from "./List";
import "./style/ManageHost.css";
import Loading from "./Loading";

const ManageHost = () => {
  let [task, setTask] = useState();
  let { hostId } = useParams();
  if (task === undefined) {
    getTask(hostId, setTask);
    return <Loading></Loading>
  }
  return (
    <div className="bgManage">
      <h1>Menu</h1>
      <div className="Container d-flex justify-content-center" >
        <div className="CardMH">



          {!task.menus.length && <h3>Waiting for request Menu</h3>}
          {task.menus &&
            task.menus.map((e) => (
              <List key={e.id} props={e} callback={setTask} hostId={hostId}></List>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ManageHost;
