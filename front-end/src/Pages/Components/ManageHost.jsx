import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getTask } from "../../Controller/HostController";
import List from "./List";
import "./style/ManageHost.css";

const ManageHost = () => {
  let [task, setTask] = useState();
  let { hostId } = useParams();
  if (task === undefined) {
    getTask(hostId, setTask);
    return <div>Loading</div>;
  }
  return (

    <div className="d-flex flex-column align-items-center flex-wrap bgManage">
      <div className="mt-5 rounded cardoutManage ">
        <div className="textCardManage rounded">
            <h2 className="d-flex justify-content-center text-light">Menu</h2>
          <div className="d-flex rounded justify-content-center text-center flex-wrap cardManage">
            <div className="inputManage">
              <h4 className="rounded">Name</h4>
              <input className="rounded " placeholder="Name" />
            </div>

            <div className="inputManage">
              <h4 className="rounded">Menu</h4>
              <input className="rounded" placeholder="Menu" />
            </div>

            <div className="inputManage">
              <h4 className="rounded">Price</h4>
              <input className="rounded" placeholder="Price" />
            </div>

            <div className="inputManage">
              <h4 className="rounded">Amount</h4>
              <input className="rounded" placeholder="Amount" />
            </div>

            <div className="inputManage">
              <h4 className="rounded">Comment</h4>
              <input className="rounded" placeholder="Comment" />
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-center">
              <button className="rounded btnSubmitMS btnSubmitManageS mt-4"  type="submit">ยืนยัน</button>
              <button className="rounded btnSubmitMD btnSubmitManageD mt-4"  type="delete">ยกเลิก</button>
            </div>
        </div>


      </div>

      {/* <h2 className="d-flex justify-content-center text-center mt-2 textMenu">Menu</h2>
      <div className="mt-5 rounded cardoutM ">
      <div className="d-flex rounded justify-content-center m-3 text-center flex-wrap cardM">
        <div className="inputManage">
          <h4 className="rounded">ชื่อผู้สั่ง</h4>
          <input className="rounded " placeholder="Name" />
        </div>
        <div className="inputManageM">
          <h4 className="rounded">ชื่ออาหาร</h4>
          <input className="rounded" placeholder="Name" />
        </div>

        <div className="inputManageM">
          <h4 className="rounded">ราคา</h4>
          <input className="rounded" placeholder="Amount" />
        </div>


        <div className="inputManageM">
          <h4 className="rounded">จำนวน</h4>
          <input className="rounded" placeholder="Amount" />
        </div>



      </div>
        <div className="inputManageM text-center p-3 ">
          <h4 className="rounded ">หมายเหตุ</h4>
          <input className="rounded" placeholder="Comment" />
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <button className="rounded btnSubmitVisitS"  type="submit">ยืนยัน</button>
          <button className="rounded btnSubmitVisitD" type="delete">ยกเลิก</button>
        </div> */}

      {/* {task.menus &&
          task.menus.map((e) => (
            <List key={e.id} props={e} callback={setTask} hostId={hostId}></List>
          ))}
        {task.menus === [] && <h3>Waiting for request Menu</h3>} */}
      {/* </div> */}
    </div>

  );
};

export default ManageHost;
