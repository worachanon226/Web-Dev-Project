import { acceptMenu, denyMenu, getTask } from "../../Controller/HostController";
import React, { useState } from "react";

const List = ({ props, hostId, callback }) => {
  let color = { bg: "", bd: "" };
  if (props.isConfirm) {
    color.bg = "#a3ff9e";
    color.bd = "#23ff17";
  } else color.bg = "yellow";

  
  return (
    <div className="border border-danger rounded d-flex row mb-3 mt-3 text-center">
      <div className="col ">
        <div className="m-1">Canteen: {props.store}</div>
        <div className="m-1">Menu: {props.comment}</div>
      </div>
      <div className="col">
        <div className="m-1">Price: {props.name}</div>
        <div className="m-1">Amount: {props.store}</div>
      </div>
      <div className="m-1 d-flex justify-content-center align-items-center">Note: {props.comment}</div>
    <div className="col w-25 mb-2 d-flex justify-content-evenly">
      {props.isConfirm || (
         <button  className="btn btn-success btn-sm w-25"
           onClick={async () => {
             await acceptMenu(hostId, props.id);
             getTask(hostId, callback);
           }}
         >
           Accept
         </button>
       )}
       {props.isConfirm || <button className="btn btn-danger btn-sm w-25" onClick={async () => {
             await denyMenu(hostId, props.id);
             getTask(hostId, callback);
           }}>Deny</button>}
           </div>
     </div>
  );
};


export default List;
