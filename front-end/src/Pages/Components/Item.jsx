import { Link } from "react-router-dom";
import React from "react";
import './style/Item.css'

let Item = ({data,control}) => {
  return (
    <div className='boxStyle'>
      <p>โรงอาหาร:{data.canteen}</p>
      <p>รวม:{data.totalPrice}</p>
      <Link className="btJoin" to={data.id}>JOIN</Link>
      {control}
      
    </div>
  );
};

export default Item;
