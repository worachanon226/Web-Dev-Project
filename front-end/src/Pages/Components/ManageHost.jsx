import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getTask } from "../../Controller/HostController";
const ManageHost = () => {
  let [task, setTask] = useState();
  let { hostId } = useParams();
  if (task === undefined) {
    getTask(hostId,setTask)
    return (
      <div>
        Loading
      </div>
    );
  }
  return (
    <div>
      {task.menus.map((e) => (
        <div key={e.id}>{e.id}+{e.name}+{e.price}</div>
      ))}
    </div>
  );
};

export default ManageHost;
