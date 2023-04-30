import { getTasks, deleteTask, getCanteenData } from "../Controller/HostController";
import { AddHostModal } from "./Components/createHostModal";
import { useUserContext } from "../userContext";
import React, { useState } from "react";
import {MdDelete} from 'react-icons/md'
import Item from "./Components/Item";
import './style/Host.css'
import Loading from "./Components/Loading";
import { FaUser } from "react-icons/fa";




function Host() {
  let { user } = useUserContext();
  let [item,setItem] = useState()
  let [task, setTask] = useState();
  if (task === undefined || item === undefined) {
    getTasks(setTask);
    return <Loading/>
  }
  return (
    <div className="containerStyle">
      <AddHostModal callback={setTask} />
      <button className="btHostRe"
        onClick={() => {
          getTasks(setTask);
        }}
      >
      REFRESH
      </button>
      <div className='hostListcontainHost p-4'>
        {task.map((e) => {
          if (e.userId === user.id) {
            return (
              <Item
                key={e.id}
                data={e}
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
          return <></>;
        })}
        </div>
      
    </div>
  );
}

let Control = ({ id, callback }) => {
  return (
    <button className="btHostDe"
      onClick={async () => {
        await deleteTask(id);
        getTasks(callback);
      }}
    >
       <div className="d-flex flex-wrap justify-content-end ">
          <MdDelete classname='iconMenuHost' size={25} />
        </div>
    </button>
  );
};
export default Host;
