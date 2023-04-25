import { addMenu } from "../../Controller/GuestController";
import { IoCloseSharp } from 'react-icons/io5';
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";


import user from "../../Controller/test/User.json";
function AddMenuModal({ callback, taskId }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#FF8066",
      height: "320px",
      width: "60%",
      padding: "1.2rem",
      borderRadius: '30px',
      boxShadow: '1px 2px 20px #F4AAB9',
    },
  };
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
        userId: user[1].id,
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
      <button onClick={() => setIsOpen(true)}>ADD</button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-end">
        <button onClick={() => setIsOpen(false)}><IoCloseSharp size={35}/></button>
        </div>

        <h2 style={{ textAlign: "center", color: 'white', fontSize: '1.75rem', padding: '5px' }}>Add</h2>
        <form style={{ padding: "15px", }} onSubmit={handleSubmit}>
          <div class="row gap-3 mb-3">
            <input className="col w-auto rounded" style={{ fontSize: '18px' }} placeholder="Store" />
            <input className="col align-self w-auto rounded" style={{ fontSize: '18px' }} placeholder="Menu" />
          </div>

          <div class="row gap-3 mb-3">
            <input className="col align-self w-auto rounded" style={{ fontSize: '18px' }} type="number" placeholder="Price" />
            <input className="col w-auto rounded" style={{ fontSize: '18px' }} type="number" placeholder="Amount" />
            <input className="rounded w-full" style={{ fontSize: '18px' }} placeholder="Comment" />
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <button className="rounded bg-light w-25" style={{fontSize:'18px'}} type="submit">ADD</button>
          </div>
        </form>

      </Modal>
    </div>
  );
}

export { AddMenuModal };
