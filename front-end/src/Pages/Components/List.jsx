import { acceptMenu,denyMenu, getTask } from "../../Controller/HostController";
import React, { useState } from "react";

const List = ({ props, hostId, callback }) => {
  let color={bg:"",bd:""};
  if (props.isConfirm) {
    color.bg = "#a3ff9e";
    color.bd = "#23ff17";
  } else color.bg = "yellow";
  return (
    <div className="d-flex flex-row align-items-center">
      <div className="">
        <div className="">Menu:  {props.name}</div>
        <div>Price: {props.price}</div>
        <div> {props.name}</div>
      </div>
      <div className="bg-orange-600 d-flex gap-5">
        <div>{props.store}</div>
        <div>{props.comment}</div>
      </div>
    <div>{JSON.stringify(props)}</div>
    {props.isConfirm || (
        <button
          onClick={async () => {
            await acceptMenu(hostId, props.id);
            getTask(hostId, callback);
          }}
        >
          Accept
        </button>
      )}
      {props.isConfirm && <button onClick={async () => {
            await denyMenu(hostId, props.id);
            getTask(hostId, callback);
          }}>Deny</button>}
    </div>
  );
};

export default List;