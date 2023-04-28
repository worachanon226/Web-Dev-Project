import { Link } from "react-router-dom";
import React from "react";
import './style/Item.css'

let Item = ({data,control}) => {
  return (
    <div className='boxStyle'>
      <p style={{marginTop:'10px'}}>โรงอาหาร:{data.canteen}</p>
      <p style={{marginTop:'10px'}}>รวม:{data.totalPrice}</p>
      <Link className="btJoin" to={data.id}>JOIN</Link>
      {control}
      
    </div>
  );
};

export default Item;
