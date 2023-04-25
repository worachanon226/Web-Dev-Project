
import { getTasks } from "../Controller/GuestController";
import VisitHost from "./Components/VisitHost";
import React, { useState } from "react";
import Item from "./Components/Item";
let fakeUser = {
  id: "3",
};
function Host() {
  let containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",

  };
  let hostListcontain = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "80%",
    height: "fit-content",
    width: "80%",

  };


  let [task, setTask] = useState();
  if (task === undefined) {
    getTasks(setTask);
    return <div>Loading</div>;
  }
  return (
    
    <div style={containerStyle}>
       <button style={{fontSize:'1.25rem' , background:'pink', borderRadius:'15px',width:'8%',height:'50px', color:'white' ,
       boxShadow:'1px 2px 10px #948484', }}
        onClick={() => {
          getTasks(setTask);
        }}
      >
        refresh
      </button>
      <div style={hostListcontain}>
        {task.map((e) => (
          <Item
            key={e.id}
            {...e}
          />
        ))}
      </div> 
      
    </div>
    
  );
}
export default Host;
