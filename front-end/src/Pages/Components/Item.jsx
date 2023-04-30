import { Link } from "react-router-dom";
import React from "react";
import './style/Item.css'

let Item = ({data,control}) => {
  return (

    <div className='boxStyle'>
      <div className="boxStyleyer2">
       <img className="picturboxlayer" src="https://static.wixstatic.com/media/70ea9d_d741f0b55f0849d3b45ce20cf3352845~mv2.png/v1/fill/w_274,h_274,al_c,usm_0.66_1.00_0.01/Delivery%20Icon.png" alt="hew" />
      <h4 className="canteenname">Canteen:{data.canteen}</h4>
      <p className="sum">Sum:{data.totalPrice}</p>
      <p className="sum">ID:{data.totalPrice}</p>
      </div>
      <Link className="btJoin" to={data.id}>JOIN</Link>
      {control}
    </div>

  );
};

export default Item;