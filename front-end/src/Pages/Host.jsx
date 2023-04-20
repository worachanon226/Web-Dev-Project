// import React, { useState } from "react";

// import{AddHostModal} from "./Components/HostModal"
// function Host() {
//   let containerStyle = {

//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100%",
//     width: "100%",
    
//   };
//   let hostListcontain = {
//     backgroundColor: "#f48d79",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     height: "50%",
//     width: "80%",
//     border:"2px solid",
//     borderRadius: "20px",
//     paddingTop: '50px'

//   };
//   let listHost = {
//     backgroundColor: "#FFFFFF",
//     height: "10%",
//     width: "90%",
//     border:"1px solid",
//     borderRadius: "15px",
//     margin:"15px",
//   };


//   let [host,setHost] = useState([1,2,3,4])
//   return (
//     <div style={containerStyle}>
//       <AddHostModal callback={setHost}/>
//       <div style={hostListcontain}>
//         {host.map((e)=>
//           <div style={listHost}>{e}</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Host;

import React, { useState } from "react";
import { AddHostModal } from "./Components/createHostModal";
import Item from "./Components/Item";
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
    minHeight: "50%",
    height: "fit-content",
    width: "80%",
    border: "2px solid",
    borderRadius: "20px",
    background:'green'
  };
  let listHost = {
    height: "10%",
    width: "90%",
    border: "1px solid",
    borderRadius: "20px",
    margin: "10px 0",
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
      <AddHostModal callback={setHost} />
      <div style={hostListcontain}>
        {host.map((e) => (
          <Item key = {e.name}  {...e}  />
        ))}
      </div>
    </div>
  );
}

export default Host;