import { acceptMenu,denyMenu, getTask } from "../../Controller/HostController";
import React, { useState } from "react";

const List = ({ props, hostId, callback }) => {
  let color;
  if (props.isConfirm) {
    color = "green";
  } else color = "yellow";
  return (
    <>
      <div style={{ background: color }}>{JSON.stringify(props)}</div>
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
    </>
  );
};

export default List;
