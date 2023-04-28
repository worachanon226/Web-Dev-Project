import { deleteMenu, getTask } from "../../Controller/GuestController";
import { AddMenuModal } from "./createMenuModal";
import { IoCloseSharp } from 'react-icons/io5';
import { GrFormAdd } from 'react-icons/gr'
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import './style/VisitHost.css'

const VisitHost = () => {
  let [menu, setMenu] = useState();
  let { hostId } = useParams();
  if (menu === undefined) {
    getTask(hostId, setMenu);
    return <div>Loading</div>;
  }
  return (
    <div className="mt-5 d-flex flex-column align-items-center w-100 h-100 flex-wrap">
    <AddMenuModal callback={setMenu} taskId={hostId} />
    <div className="m-5 rounded cardout">
      {menu.map((e) => (
        <div className="textCardOut" key={e.id}>
          <div className="d-flex align-self w-auto rounded justify-content-between m-3 text-center flex-wrap">
            <h2 className="rounded">ชื่ออาหาร</h2>
            <h2 className="rounded">จำนวน</h2>
            <h2 className="rounded">หมายเหตุ</h2>
            <IoCloseSharp class='iconVisit' />
          </div>

          <div className="d-flex align-self w-auto rounded justify-content-between m-3 text-center flex-wrap textCardIn">
            <input className="rounded " placeholder="Name" />
            <input className="rounded"  placeholder="Amount" />
            <input className="rounded" placeholder="Comment" />
            <IoCloseSharp size={30} className="IconVisitHost"/>
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <button className="rounded bg-light m-3 submitVisit " type="submit">ยืนยัน</button>
          </div>
          
        </div>
      ))}
    </div>
  </div>

);
};

export default VisitHost;