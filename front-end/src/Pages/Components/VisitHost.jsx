import { deleteMenu, getTask } from "../../Controller/GuestController";
import { useUserContext } from "../../userContext";
import { AddMenuModal } from "./createMenuModal";
import { useParams } from "react-router-dom";
import { GrFormAdd } from 'react-icons/gr';
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./style/VisitHost.css";
import List from "./List"
import Loading from "./Loading";
const VisitHost = () => {
  let TaskAvailable = true
  let { user } = useUserContext();
  let [menu, setMenu] = useState();
  let { hostId } = useParams();
  if (menu === undefined) {
    TaskAvailable = getTask(hostId, setMenu);
    return <Loading/>
  }
  
  console.log(TaskAvailable);
  return (
    <div className="d-flex flex-column align-items-center flex-wrap bgVisitHost">
      {TaskAvailable && <AddMenuModal callback={setMenu} taskId={hostId} />}
      <div className="mt-5 rounded cardoutVisit ">
        
        {menu.map((e) => (

          
          e.userId === user.id && (
          <div>
            <List
              key={e.id}
              props={e}
              userId={user.id}
              callback={setMenu}
              hostId={hostId}
            ></List>


            {
                <button
                  style={{ marginLeft: "auto", background: "green" }}
                  onClick={async () => {
                    await deleteMenu(hostId, e.id);
                    getTask(hostId, setMenu);
                  }}
                >
                  Delete
                </button>

             
            } </div>

        )))}

      </div>
    </div>

  );
};

export default VisitHost;