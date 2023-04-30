import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { finishTask, getTask } from "../../Controller/HostController";
import List from "./List";
import "./style/ManageHost.css";
import Loading from "./Loading";

const ManageHost = () => {
  let [task, setTask] = useState();
  let { hostId } = useParams();
  if (task === undefined) {
    getTask(hostId, setTask);
    return <Loading></Loading>;
  }
var startDate = new Date();
var endDate   = new Date();
var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  return (
    <div className="bgManage">
      <div className="d-flex  justify-content-end  btnContainer">
        <div className="d-flex  justify-content-end gap-3 btnContainer-in">
          <button className="btHostRe" onClick={async () => {
            await finishTask(task.id,false)
            getTask(hostId, setTask);
          }}>
            Finish
          </button>
        </div>
      </div>
      <div className="d-flex  justify-content-end gap-3 btnContainer-in p-2">
        <h1 className="textheader m-auto">Menu</h1>
      </div>

      <div className="Container d-flex justify-content-center">
        <div className="CardMH">
          <div className="MHCard">
            {!task.menus.length && <h3>Waiting for request Menu</h3>}
            {task.menus &&
              task.menus.map((e) => (
                <List
                  key={e.id}
                  props={e}
                  callback={setTask}
                  hostId={hostId}
                ></List>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHost;
