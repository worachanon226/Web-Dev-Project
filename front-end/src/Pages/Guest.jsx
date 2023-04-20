import React, { useState } from "react";
import Item from "./Components/Item";
function Guest() {
  let containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };

  let [host, setHost] = useState([
    {
      name: "A",
      owner: "userA",
    },
    {
      name: "B",
      owner: "userB",
    },
    {
      name: "C",
      owner: "userC",
    },
    {
      name: "D",
      owner: "userD",
    },
  ]);
  return (
    <div style={containerStyle}>
      <h2>Online Host</h2>
      {host.map((e) => (
        <Item key={e.name} {...e} />
      ))}
    </div>
  );
}

export default Guest;
