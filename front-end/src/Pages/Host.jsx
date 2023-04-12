import React from "react";
import{AddHostModal} from "./Components/HostComponent"
function Host() {
  let containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };
  
  return (
    <div style={containerStyle}>
      <AddHostModal/>
    </div>
  );
}

export default Host;
