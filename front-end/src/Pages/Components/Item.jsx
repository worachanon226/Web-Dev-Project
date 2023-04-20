import React from "react";
import { Link } from "react-router-dom";


let boxStyle ={
  width:"25%",
  height:"130px",
  display:'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#FF8066',
  boxShadow: '1px 2px 9px #55494C',
  borderRadius: "6px",
  marginTop:'10px',
  marginLeft:'1.25rem'

 
  
}

let  Item = (data) => {
  return (
    <div style={boxStyle}>
      <p style={{marginTop:'10px'}}>{data.name}</p>
      <p style={{marginTop:'10px'}}>{data.owner}</p>
      <Link style={{background:'#F4AAB9', padding:'0.5rem',marginTop:'10px', borderRadius: "6px", }} to={data.name} >JOIN</Link>
    </div>
  );
};
export default Item;

// let boxStyle = {
//     width: "30%",
//     height: "45%",
//     margin: "5px",
//     borderRadius: "6px",
//     borderWidth: "1px",
//     padding: "5px",
//     background: '#FF8066',
//     boxShadow: '1px 2px 9px #F4AAB9',
//     width: '20vw',
//     height: '20vh',
//     display:'flex',
//     flexDirection: 'column',
//     flexWrap:'wrap'
// }

// let Item = (data) => {
//     return (
//         <div style={{background:'red'}}>

//             <div style={boxStyle}>
//                 <div style={{display: 'flex',  flexDirection: 'column', alignItems: 'center', }}>
//                     <p style={{}}>{data.name}</p>
//                     <p style={{}}>{data.owner}</p>
//                     <div style={{ textAlign: "center", width: "50%", backgroundColor: "white", borderRadius: "5px" }}>
//                         <Link to={data.name} >JOIN</Link></div></div>
//             </div>
//         </div>

//     );
// };
// export default Item;