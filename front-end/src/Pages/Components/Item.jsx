import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style/Item.css";
import { getUserInfo } from "../../Controller/GuestController";
let Item = ({ data, control }) => {
  let [userInfo, setUserinfo] = useState();
  if (userInfo === undefined) {
    getUserInfo(data.userId).then((res) => {
      setUserinfo(res);
    });
  }

  return (
    <div className="boxStyle">
      <div className="boxStyleyer2">
        <img
          className="picturboxlayer"
          src="https://cdn.dribbble.com/users/2063527/screenshots/11467383/media/c1ad5d2ebbdebb25282247869816cc9c.gif"
          alt="hew"
        />
        <h4 className="canteenname">Canteen:{data.canteen}</h4>
        <p className="sum">Total:{data.totalPrice}</p>
        <p className="">Available:{data.currentTasks}/{data.maxTasks}</p>
        {userInfo && (
          <div className="quota">
            <h5>Owner Contact</h5>
            <p>
             Name: {userInfo.name} {userInfo.lastname}
            </p>
            <p>
            Tell: {userInfo.phone}
            </p>
          </div>
        )}
      </div>
      <Link className="btJoin" to={data.id}>
        JOIN
      </Link>
      <div>
      {control}
      </div>
    </div>
  );
};

export default Item;
