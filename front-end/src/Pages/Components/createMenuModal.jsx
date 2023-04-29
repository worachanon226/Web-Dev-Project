import { addMenu } from "../../Controller/GuestController";
import user from "../../Controller/test/User.json";
import { useUserContext } from "../../userContext";
import { IoCloseSharp } from 'react-icons/io5';
import React, { useState } from "react";
import './style/createMenuModal.css';
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";


function AddMenuModal({ callback, taskId }) {
  let { user } = useUserContext()
  const [modalIsOpen, setIsOpen] = useState(false);

  let handleSubmit = (event) => {
    if (
      event.target[0].value !== "" &&
      event.target[1].value !== "" &&
      event.target[2].value !== "" &&
      event.target[3] !== ""
    ) {
      let data = {
        id: uuidv4(),
        userId: user.id,
        store: event.target[0].value,
        name: event.target[1].value,
        price: parseInt(event.target[2].value),
        amount: parseInt(event.target[3].value),
        isConfirm: false,
        comment: event.target[4].value,
      };
      addMenu(taskId, data, callback);
      setIsOpen(false);
    }
  };
  return (
    <div>
      <button className="addBtn" onClick={() => setIsOpen(true)}>ADD</button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        className='customStylesMenuModal d-flex flex-column justify-content-around'
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-end">
          <button onClick={() => setIsOpen(false)}><IoCloseSharp className='iconMenuModal' size={25} /></button>
        </div>

        <h2 class='d-flex justify-content-center textMenu'>Add</h2>

        <form onSubmit={handleSubmit}>
          <div class=" row gap-3 mb-3 textMenuModal ">
            <input className="col w-auto rounded"  placeholder="Store" />
            <input className="col align-self w-auto rounded" placeholder="Menu" />
          </div>

          <div class="row gap-3 mb-3 textMenuModal">
            <input className="col align-self w-auto rounded"  type="number" placeholder="Price" />
            <input className="col w-auto rounded"  type="number" placeholder="Amount" />
            <input className="rounded w-full"  placeholder="Comment" />
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <button className="rounded bg-light w-25" type="submit">ADD</button>
          </div>
        </form>

      </Modal>
    </div>
  );
}

export { AddMenuModal };