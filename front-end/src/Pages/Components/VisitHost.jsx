import { deleteMenu, getTask } from "../../Controller/GuestController";
import { AddMenuModal } from "./createMenuModal";
import { IoCloseSharp } from 'react-icons/io5';
import { GrFormAdd } from 'react-icons/gr'
import { useParams } from "react-router-dom";
import React, { useState } from "react";

const VisitHost = () => {
  let [menu, setMenu] = useState();
  let { hostId } = useParams();
  if (menu === undefined) {
    getTask(hostId, setMenu);
    return <div>Loading</div>;
  }
  return (
    <div className="bg-primary d-flex flex-column align-items-center w-100 h-100 flex-wrap">
      <AddMenuModal callback={setMenu} taskId={hostId} />
      <div className="m-5 rounded" style={{ width: '60%', height: '245px', background:'#FF8066' }}>
        {menu.map((e) => (
          <div className="align-self rounded flex-wrap" key={e.id}>
            <div className="d-flex align-self w-auto rounded justify-content-between m-3 text-center flex-wrap">
              <h4 className="bg-light rounded" style={{ fontSize: '18px',width:'30%',height:'30px'}}>ชื่ออาหาร</h4>
              <h4 className="bg-light rounded" style={{ fontSize: '18px',width:'30%'}}>จำนวน</h4>
              <h4 className="bg-light rounded" style={{ fontSize: '18px',width:'30%'}}>หมายเหตุ</h4>
              <IoCloseSharp size={30} style={{ background: 'red', color: 'white' }} />
            </div>

            <div className="d-flex align-self w-auto rounded justify-content-between m-3 text-center flex-wrap">
              <input className="rounded" style={{ fontSize: '18px',width:'30%',alignContent:'center'}} placeholder="Name" />
              <input className="rounded" style={{ fontSize: '18px',width:'30%' }} placeholder="Amount" />
              <input className="rounded" style={{ fontSize: '18px',width:'30%' }} placeholder="Comment" />
              <IoCloseSharp size={30} style={{ background: 'red', color: 'white' }} />
            </div>

            <div className="d-flex align-self w-auto rounded justify-content-between m-3 text-center flex-wrap">
              <input className="rounded" style={{ fontSize: '18px',width:'30%',alignContent:'center'}} placeholder="Name" />
              <input className="rounded" style={{ fontSize: '18px',width:'30%' }} placeholder="Amount" />
              <input className="rounded" style={{ fontSize: '18px',width:'30%' }} placeholder="Comment" />
              <IoCloseSharp size={30} style={{ background: 'red', color: 'white' }} />
            </div>

            
            <div className="d-flex justify-content-center">
              <GrFormAdd size={25} style={{ background: 'white', borderRadius:'10px'}}/>
            </div>

            <div className="d-flex gap-3 justify-content-center">
            <button className="rounded bg-light m-3" style={{fontSize:'18px',width:'10%',alignContent:'center'}} type="submit">ยืนยัน</button>
          </div>

            {/* <span  style={{background:'purple'}}>{JSON.stringify(e)}</span>
            <button
              style={{ marginLeft: "auto", background: "green" }}
              onClick={async () => {
                await deleteMenu(hostId, e.id);
                getTask(hostId, setMenu);
              }}
            >
              Delete
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitHost;