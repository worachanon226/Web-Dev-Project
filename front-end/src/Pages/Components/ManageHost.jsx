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
    return <Loading></Loading>;
  }
  return (
    <div className="bgManage">
      <div className="d-flex  justify-content-end  btnContainer">
        <div className="d-flex  justify-content-end gap-3 btnContainer-in">
          <button className="btHostRe" onClick={() => {}}>
            Finish
          </button>
        </div>
      </div>

      




      <div className="Container d-flex justify-content-center">
        <div className="CardMH">
          <div className="MHCard">
            {!task.menus.length && <img className="picturwait"src="https://cdn.dribbble.com/users/1478651/screenshots/9683496/media/b921a805a76e70f0c36f0410310be009.gif"alt="hew"
        />}
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
