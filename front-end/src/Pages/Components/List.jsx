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
      <div className="cardLsit">
        <div>Canteen: {props.store}</div>
        <div>Menu: {props.comment}</div>
        <div className="">Price: {props.name}</div>
        <div className="">Amount: {props.store}</div>
        <div className="">Note: {props.comment}</div>
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