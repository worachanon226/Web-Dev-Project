import { Link } from "react-router-dom";
import React from "react";
import './style/Item.css'

let Item = ({data,control}) => {
  return (

    <div className='boxStyle'>
    
      <h4 className="canteenname">โรงอาหาร:{data.canteen}</h4>
      <p className="sum">รวม:{data.totalPrice}</p>
      <Link className="btJoin" to={data.id}>JOIN</Link>
      {control}
    </div>

  );
};

export default Item;