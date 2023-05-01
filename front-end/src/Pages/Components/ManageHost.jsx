import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { finishTask, getTask } from "../../Controller/HostController";
import List from "./List";
import "./style/ManageHost.css";
import Loading from "./Loading";
import LoadingTask from "./LoadingTask";

const ManageHost = () => {
  let navigate = useNavigate();
  let [task, setTask] = useState();
  let { hostId } = useParams();
  if (task === undefined) {
    getTask(hostId, setTask);
    return <Loading></Loading>;
  }
  return (
    <div className="containerStyle">
      <div className="d-flex  justify-content-end  btnContainer">
        {task.available && (
          <div className="d-flex  justify-content-end gap-3 btnContainer-in">
            <button
              className="btHostRe"
              onClick={async () => {
                let con = task.menus.filter((e) => e.isConfirm).length;
                if ( con <= task.maxTasks) {
                  await finishTask(task.id, false);
                  navigate("/Host", { replace: true });
                }
              }}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
      <div className="d-flex  justify-content-end gap-3 btnContainer-in p-2">
        <h1 className="textheader m-auto">Menu</h1>
      </div>

      <div className="Container d-flex row justify-content-center">
        {!task.menus.length && <LoadingTask />}
        {task.menus &&
          task.menus.map((e) => (
            <List
              key={e.id}
              props={e}
              available={task.available}
              callback={setTask}
              hostId={hostId}
            ></List>
          ))}
      </div>
    </div>
  );
};

export default ManageHost;
