import { Link } from "react-router-dom";
import React from "react";
let boxStyle = {
  width:"50%",
  height:"170px",
  display:'flex',
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: 'center',
  background: '#FF8066',
  boxShadow: '1px 2px 9px #55494C',
  borderRadius: "6px",
  marginTop:'30px',
  marginLeft:'1.25rem'

};

let Item = ({data,control}) => {
  return (
    <div style={boxStyle}>
      <p style={{marginTop:'10px'}}>โรงอาหาร:{data.canteen}</p>
      <p style={{marginTop:'10px'}}>รวม:{data.totalPrice}</p>
      <Link style={{background:'#FFFFFF', padding:'0.5rem',marginTop:'10px', borderRadius: "6px", textDecoration:'none'}}  to={data.id}>JOIN</Link>
      {control}
      
    </div>
  );
};

export default Item;
