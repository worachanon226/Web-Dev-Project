import { createTask } from "../../Controller/HostController";
import { useUserContext } from "../../userContext";
import { IoCloseSharp } from 'react-icons/io5';
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import "./style/createHostModal.css";
import { getCanteenData } from "../../Controller/HostController";

function AddHostModal({ callback }) {
  let {user} = useUserContext()
  let [item,setItem] = useState()
  const [modalIsOpen, setIsOpen] = useState(false);
  if(item === undefined){
    getCanteenData().then((res)=>setItem(res))
  }
  let handleSubmit = (event) => { 
    if (event.target[0].value !== "" ) {
      let data = {
        id: uuidv4(),
        userId: user.id,
        canteen: event.target[0].value,
        maxTasks: event.target[1].value,
      };
      createTask(data, callback);
      setIsOpen(false);
    }
  };
  return (
    <div className="d-flex justify-content-center">
       <button className="btAdd" onClick={() => setIsOpen(true)}>ADD</button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        className='customStylesHostModal'
        contentLabel="Example Modal"
      >
      
        <div className="d-flex flex-wrap justify-content-end ">
          <button onClick={() => setIsOpen(false)}><IoCloseSharp size={25} /></button>
        </div>

        <h2  className="textHostModal justify-content-center d-flex">Add</h2>

        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-wrap gap-3 justify-content-center p-3 fromInput">
            <label for="canteen">Choose the Canteen:</label>
            <select name="canteen" id="canteen">
              {item && item.map((e)=>
                <option value={e}>{e}</option>
              )}
            </select>
            <input className="d-flex w-auto rounded w-25" type="number" min="0" oninput="validity.valid||(value='')"  placeholder="Max Tasks: 3" />
          </div>

          <div className="d-flex gap-3 justify-content-center p-3">
            <button className="rounded bg-light w-25" type="submit">ADD</button>
          </div>
        </form>

      </Modal>
    </div>
  );
}

export { AddHostModal };