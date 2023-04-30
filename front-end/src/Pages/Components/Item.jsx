import { Link } from "react-router-dom";
import React from "react";
import './style/Item.css'

let Item = ({data,control}) => {
  return (

    <div className='boxStyle'>
      <div className="boxStyleyer2">
       <img className="picturboxlayer" src="https://cdn.dribbble.com/users/2063527/screenshots/11467383/media/c1ad5d2ebbdebb25282247869816cc9c.gif" alt="hew" />
      <h4 className="canteenname">Canteen:{data.canteen}</h4>
      <p className="sum">Sum:{data.totalPrice}</p>
      <p className="sum">ID:{data.totalPrice}</p>
      <p className="quota">Quota:{data.totalPrice}</p>
      </div>
      <Link className="btJoin" to={data.id}>JOIN</Link>
      {control}
    </div>

  );
};

export default Item;