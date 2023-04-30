import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style/Item.css";
import { getUserInfo } from "../../Controller/GuestController";
let Item = ({ data, control, disabled }) => {
  let [userInfo, setUserinfo] = useState();
  if (userInfo === undefined) {
    getUserInfo(data.userId).then((res) => {
      setUserinfo(res);
    });
  }
  // console.log();
  return (
    <div className="boxStyle">
      <div className="boxStyleyer2">
        <img
          className="picturboxlayer"
          src="https://cdn.dribbble.com/users/2063527/screenshots/11467383/media/c1ad5d2ebbdebb25282247869816cc9c.gif"
          alt="hew"
        />
        <h4 className="canteenname">
          <b>Canteen: </b>
          {data.canteen}
        </h4>
        <p className="sum">
          <b>Total: </b>
          {data.menus.map((e) => e.price).reduce((a, b) => a + b, 0)}
        </p>
        <p className="">
          <b>Available: </b>
          {data.currentTasks}/{data.maxTasks}
        </p>
        {userInfo && (
          <div className="quota">
            <h5 className="text-center fw-bold">Owner Contact</h5>
            <p>
              <b>Name: </b> {userInfo.name} {userInfo.lastname}
            </p>
            <p>
              <b>Tell:</b> {userInfo.phone}
            </p>
          </div>
        )}
      </div>
      {disabled || (
        <Link className="btJoin" to={data.id}>
          JOIN
        </Link>
      )}
      <div>{control}</div>
    </div>
  );
};

export default Item;
