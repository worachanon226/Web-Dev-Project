import React, { useState } from "react";
import Item from "./Components/Item";

function Guest() {
  let containerStyle = {
    display: "flex",
    justifyContent: "center",
    // height: "50%",
    width: "100%",
    background:'blue',
    flexWrap:'wrap',
    cursor:'grid',
    padding:'30px'

  }
    ;

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
        {
      name: "E",
      owner: "userD",
    },
        {
      name: "F",
      owner: "userD",
    },
            {
      name: "G",
      owner: "userD",
    },
            {
      name: "H",
      owner: "userD",
    },
  ]);
  return (
    <div style={{background:'red', height:'100%'}}>
    <h2>Online Host</h2>

    <div style={containerStyle}>
      {host.map((e) => (
        <Item key={e.name} {...e} />
      ))}
    </div>
    </div>


  );
}

export default Guest;