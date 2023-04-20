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
      <p>{data.name}</p>
      <p>{data.store}</p>
      <p>{data.owner}</p>
      <Link to={data.name} >JOIN</Link>
    </div>
  );
};
export default Item;