import { deleteMenu, getTask } from "../../Controller/GuestController";
import { useUserContext } from "../../userContext";
import { AddMenuModal } from "./createMenuModal";
import { useParams } from "react-router-dom";
import {GrFormAdd} from 'react-icons/gr';
import React, { useState } from "react";
import "./style/VisitHost.css";

const VisitHost = () => {
  let { user } = useUserContext();
  let [menu, setMenu] = useState();
  let { hostId } = useParams();
  if (menu === undefined) {
    getTask(hostId, setMenu);
    return <div>Loading</div>;
  }
  return (
    <div className="d-flex flex-column align-items-center flex-wrap bgVisitHost">
      <AddMenuModal callback={setMenu} taskId={hostId} />
      <div className="mt-5 rounded cardoutVisit ">
        {menu.map((e) => (
          <div className="textCardOutVisit rounded" key={e.id}>
            <div className="d-flex rounded justify-content-center m-3 text-center flex-wrap cardCover">
              <div className="inputMerge">
                <h4 className="rounded">ชื่ออาหาร</h4>
                <input className="rounded " placeholder="Name" />
              </div>

              <div className="inputMerge">
                <h4 className="rounded">จำนวน</h4>
                <input className="rounded" placeholder="Amount" />
              </div>

              <div className="inputMerge">
                <h4 className="rounded">หมายเหตุ</h4>
                <input className="rounded" placeholder="Comment" />
              </div>
            </div>

            <div className="d-flex gap-3 justify-content-center">
              <button className="rounded IconAddVi" type="submit"><GrFormAdd/></button>
            
            </div>

              {/* <div className="IconAddVi d-flex gap-3 justify-content-center">
                <GrFormAdd/>
              </div> */}

            <div className="d-flex gap-3 justify-content-center">
              <button className="rounded btnSubmitVisitS" type="submit">ยืนยัน</button>
              <button className="rounded btnSubmitVisitD"  type="delete">ยกเลิก</button>
            </div>

          </div>
        ))}
      </div>
    </div>

  );
};

export default VisitHost;