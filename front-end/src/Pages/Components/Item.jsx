import React from "react";
import { Link } from "react-router-dom";
let boxStyle = {
  border: "1px solid",
  width: "30%",
  height: "45%",
};

let Item = ({data}) => {
  return (
    <div style={boxStyle}>
      {/* <p>โรงอาหาร:{data.canteen}</p>
      <p>รวม:{data.totalPrice}</p>
      <Link to={data.id}>JOIN</Link>
      <br/> */}

      <div style={{overflow:"clip"}}> {JSON.stringify(data)}</div>

      {data.control}
    </div>
  );
};

export default Item;
