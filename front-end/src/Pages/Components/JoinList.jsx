import {deleteMenu ,getTask} from "../../Controller/GuestController";
import React, { useState } from "react";

const JoinList = ({ props, hostId, callback }) => {
let [color,setColor] = useState("white")
  //  if(props.is)
  console.log(props);
  return (
    <div style={{backgroud:color}} className="border border-danger rounded d-flex row mb-3 mt-3 text-center">
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
       {<button className="btn btn-danger btn-sm w-25" onClick={async () => {
             await deleteMenu(hostId, props.id);
             getTask(hostId, callback);
           }}>Delete</button>}
           </div>
     </div>
  );
};


export default JoinList;
