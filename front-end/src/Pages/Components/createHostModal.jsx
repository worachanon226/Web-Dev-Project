import { createTask } from "../../Controller/HostController";
import { useUserContext } from "../../userContext";
import { IoCloseSharp } from 'react-icons/io5';
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import "./style/createHostModal.css";


function AddHostModal({ callback }) {
  let {user} = useUserContext()
  const [modalIsOpen, setIsOpen] = useState(false);

  let handleSubmit = (event) => { 
    if (event.target[0].value !== "" && event.target[1].value !== "") {
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
        className='customStylesModal'
        contentLabel="Example Modal"
      >
        <div className="d-flex flex-wrap justify-content-end ">
          <button onClick={() => setIsOpen(false)}><IoCloseSharp size={25} /></button>
        </div>

        <h2  className="textHostModal justify-content-center d-flex">Add</h2>

        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-wrap gap-3 justify-content-center p-3 fromInput">
            <input className="d-flex w-auto rounded w-25"  placeholder="Canteen" />
            <input className="d-flex w-auto rounded w-25"  placeholder="Max Tasks" />
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
