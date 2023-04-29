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
    <div
      className="d-flex flex-column align-items-center flex-wrap bgManage w-full h-full
    "
    >
      <div
        style={{ width: "80%" ,padding:"25px"}}
        className="mt-5 rounded cardoutManage bg-white"
      >
        <h1>Menu</h1>
        {task.menus &&
          task.menus.map((e) => (
            <List
              key={e.id}
              props={e}
              callback={setTask}
              hostId={hostId}
            ></List>
          ))}
        {task.menus === [] && <h3>Waiting for request Menu</h3>}
      </div>
    </div>
  );
};

export default ManageHost;
