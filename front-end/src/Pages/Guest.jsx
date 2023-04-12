import React, { useState } from "react";
import Toast from "./Components/Toast";
import VisitHost from "./Components/VisitHost";

function Guest() {
  let containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };
  let list = ["Dummy Host1", "Dummy Host2", "Dummy Host3", "Dummy Host4"];
  let selectItem =(item) => {
    setMenu(<VisitHost menu={item}/>)
  }
  let [menu,setMenu] = useState(list.map((item) => (
    <Toast menu={item} callback={selectItem}/>
  )))
  return (
    <div style={containerStyle}>
      <h2>Online Host</h2>
      {menu}
    </div>
  );
}

export default Guest;
