import { Link } from "react-router-dom";
import React from "react";
import './style/Item.css'

let Item = ({data}) => {
  return (
    <div className='boxStyle'>
      <p>โรงอาหาร:{data.canteen}</p>
      <p>รวม:{data.totalPrice}</p>
      <Link className="linkItem" to={data.id}>JOIN</Link>
      <br/>
      {data.control}
    </div>
  );
};

export default Item;
