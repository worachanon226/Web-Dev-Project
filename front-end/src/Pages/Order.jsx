
import { useLocation } from 'react-router-dom';
import React, { Component } from "react";
import { useEffect } from "react";
import "./style/Order.css";
import $ from "jquery";



const Service = () => {

  const location = useLocation();

  return (
    <div className="d-flex flex-column align-items-center flex-wrap bgOrder">
      <div className="mt-5 rounded cardoutOrder ">
        <div className="textCardOutOrder rounded">
          <div className="d-flex rounded justify-content-center m-3 text-center flex-wrap cardCoverOrder">
            <div className="inputMergeOrder">
              <h4 className="rounded">ชื่ออาหาร</h4>
              <input className="rounded " placeholder="Name" />
            </div>

            <div className="inputMergeOrder">
              <h4 className="rounded">จำนวน</h4>
              <input className="rounded " placeholder="Name" />
            </div>

            <div className="inputMergeOrder">
              <h4 className="rounded">หมายเหตุ</h4>
              <input className="rounded " placeholder="Name" />
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Service