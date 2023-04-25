import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { deleteMenu, getTask } from "../../Controller/GuestController";
import { AddMenuModal } from "./createMenuModal";

const VisitHost = () => {
  let [menu, setMenu] = useState();
  let { hostId } = useParams();
  if (menu === undefined) {
    getTask(hostId, setMenu);
    return <div>Loading</div>;
  }
  return (
    <div style={{width:'100%',height:'100%',background:'blue'}}>
      <AddMenuModal callback={setMenu} taskId={hostId} />
      <div  style={{width:'60%',height:'60%',background:'red'}}>
        {menu.map((e) => (
          <div  style={{width:'100%',height:'20%',background:'yellow'}} key={e.id}>
            <span>{JSON.stringify(e)}</span>
            <button
              style={{ marginLeft: "auto", background: "green" }}
              onClick={async () => {
                await deleteMenu(hostId, e.id);
                getTask(hostId, setMenu);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitHost;
