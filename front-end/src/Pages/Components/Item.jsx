import React from "react";
import { Link } from "react-router-dom";


let boxStyle ={
  minWidth:'320px',
  width:"30%",
  height:"180px",
  display:'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#FF8066',
  boxShadow: '1px 5px 5px #D27F7F',
  borderRadius: "6px",
  marginTop:'1rem',
  marginLeft:'4rem'
}

let  Item = (data) => {
  return (
    <div style={boxStyle}>
      <p style={{marginTop:'10px', fontSize:'30px'}}>{data.name}</p>
      <p style={{marginTop:'10px', fontSize:'20px'}}>{data.owner}</p>
      <Link style={{background:'#fff',width:'20%', padding:'0.5rem',textAlign : 'center',marginTop:'20px', borderRadius: "10px", }} to={data.name} >JOIN</Link>
    </div>
  );
};
export default Item;
