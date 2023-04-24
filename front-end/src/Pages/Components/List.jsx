import React, { useState } from "react";
import {acceptMenu,getTask} from '../../Controller/HostController'
const List = ({ props,hostId,callback}) => {
  let handle = async () => {
    await acceptMenu(hostId,props.id)
    getTask(hostId,callback)
  }
  let color 
  if(props.isConfirm){
    color = "green"
  }else color = "yellow"
  return (
    <>
      <div style={{ background: color }}>{JSON.stringify(props)}</div>
      {props.isConfirm || <button onClick={handle}>Accept</button>}
    </>
  );
};

export default List;
