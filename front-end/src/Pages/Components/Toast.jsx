import React from "react";
import { socket } from "../../Controller/Socket";
function Toast({ menu, callback }) {
  let handleSocket = () => {
    socket.connect();
    socket.emit("connection");
  };
  return (
    <div
      style={{
        margin: "5px",
        border: "solid",
        borderRadius: "6px",
        borderWidth: "1px",
        padding: "5px",
      }}
      onClick={() => callback(menu)}
    >
      ร้าน: {menu}
    </div>
  );
}

export default Toast;
