import React from "react";
import { Link } from "react-router-dom";

let boxStyle ={
  border: '1px solid',
  width:"30%",
  height:"45%"
}

let  Item = (data) => {
  return (
    <div style={boxStyle}>
      <p>{data.id}</p>
      <p>{data.canteen}</p>
      <p>{data.userId}</p>
      <Link to={data.id} >JOIN</Link>
    </div>
  );
};
export default Item;