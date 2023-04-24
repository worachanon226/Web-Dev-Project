import React, { useState } from "react";
import Item from "./Components/Item";
function Guest() {
  let containerStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexWrap:'wrap',
    cursor:'grid',

  }
  
  return (
    <div style={{height:'100%'}}>
    <h2 style={{textAlign:'center', fontSize:'20px',marginTop:'1rem'}}>Online Host</h2>

    <div style={containerStyle}>
      <h2>Online Host</h2>
      {task.map((e) => (
        <Item key={e.Name} {...e} />
      ))}
    </div>
    </div>


  );
}

export default Guest;