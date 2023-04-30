import {
  getTasks,
  deleteTask,
  getCanteenData,
} from "../Controller/HostController";
import { AddHostModal } from "./Components/createHostModal";
import { useUserContext } from "../userContext";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Item from "./Components/Item";
import "./style/Host.css";
import Loading from "./Components/Loading";
import { FaUser } from "react-icons/fa";

function Order() {
  let { user } = useUserContext();
  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <Loading />;
  }
  return (
    <div className="containerStyle">
      <div className="d-flex  justify-content-end gap-4 btnContainer">
        <AddHostModal callback={setTask} />
        <button
          className="btHostRe"
          onClick={() => {
            getTasks(setTask);
          }}
        >
          REFRESH
        </button>
      </div>
      <h1 className="textheader mb-4">Your Host</h1>
      <div className="hostListcontainHost p-4 ">
        {task.map((e) => {
          if (e.userId === user.id) {
            return <Item key={e.id} data={e} />;
          }
          return <></>;
        })}
      </div>
      <div className="d-flex  justify-content-end gap-4 btnContainer">
        <AddHostModal callback={setTask} />
        <button
          className="btHostRe"
          onClick={() => {
            getTasks(setTask);
          }}
        >
          REFRESH
        </button>
      </div>
      <h1 className="textheader mb-4">Your Host</h1>
      <div className="hostListcontainHost p-4 ">
        {task.map((e) => {
          if (e.userId != user.id) {
            return <Item key={e.id} data={e} />;
          }
          return <></>;
        })}
      </div>
    </div>
  );
}

export default Order;
