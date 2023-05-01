import { acceptMenu, denyMenu, getTask } from "../../Controller/HostController";
import React from "react";
import "./style/List.css";

const List = ({ props, hostId, callback, available }) => {
  let color = { bg: "", bd: "" };
  if (props.isConfirm) {
    color.bg = "rgba(255, 255, 255, 1)";
    color.bd = "rgba(99, 209, 114, 1)";
  } else {
    color.bg = "rgba(255, 255, 255, 1)";
    color.bd = "rgba(255, 157, 110, 1)";
  }

  return (
    <div
      style={{ background: color.bg, borderColor: color.bd }}
      className="listBorder d-flex row mb-3 mt-3 align-items-center text-center"
    >
      <div className="col ">
        <div className="m-1">
          <b>Canteen: </b>
          {props.store}
        </div>
        <div className="m-1">
          <b>Menu: </b>
          {props.name}
        </div>
      </div>
      <div className="col">
        <div className="m-1">
          <b>Price: </b>
          {props.price}
        </div>
        <div className="m-1">
          <b>Amount: </b>
          {props.amount}
        </div>
      </div>
      <div className="m-1 d-flex justify-content-center align-items-center">
        <b>Note: </b>
        {props.comment}
      </div>
      <div className="col w-25 mb-2 d-flex justify-content-evenly">
        {available && !props.isConfirm && (
          <button
            className="btn btn-success btn-sm w-25"
            onClick={async () => {
              await acceptMenu(hostId, props.id);
              getTask(hostId, callback);
            }}
          >
            Accept
          </button>
        )}
        {available && props.isConfirm && (
          <button
            className="btn btn-danger btn-sm w-25"
            onClick={async () => {
              await denyMenu(hostId, props.id);
              getTask(hostId, callback);
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default List;
