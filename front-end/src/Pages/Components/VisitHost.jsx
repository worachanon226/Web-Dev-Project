import { deleteMenu, getTask } from "../../Controller/GuestController";
import { useUserContext } from "../../userContext";
import { AddMenuModal } from "./createMenuModal";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./style/VisitHost.css";
import List from "./List"
import JoinList from "./JoinList"
import Loading from "./Loading";
const VisitHost = () => {
  let [TaskAvailable,setTaskAvailable] = useState(true)
  let [TaskCanteen,setTaskCanteen] = useState({})
  let { user } = useUserContext();
  let [menu, setMenu] = useState();
  let { hostId } = useParams();
  if (menu === undefined) {
     getTask(hostId, setMenu).then((res)=>{
      setTaskAvailable(res.taskAvailable)
      setTaskCanteen(res.taskCanteen)
     });
   
    return <Loading/>
  }
  
  return (
    <div className="d-flex flex-column align-items-center flex-wrap bgVisitHost">
      {TaskAvailable && <AddMenuModal callback={setMenu} taskId={hostId} canteen={TaskCanteen}/>}
      <div className='cardoutVisit'>
        {menu.map((e) => (
          e.userId === user.id && (
          <div className=" ccc">
            <JoinList
              key={e.id}
              props={e}
              userId={user.id}
              callback={setMenu}
              hostId={hostId}
            ></JoinList>
          </div>
        )))}

      </div>
    </div>

  );
};

export default VisitHost;