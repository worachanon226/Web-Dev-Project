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
    <>
      <AddMenuModal callback={setMenu} taskId={hostId} />
      <div>
        {menu.map((e) => (
          <div key={e.id}>
            <span>{JSON.stringify(e)}</span>
            <button
              style={{ marginLeft: "auto", background: "red" }}
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
    </>
  );
};

export default VisitHost;
