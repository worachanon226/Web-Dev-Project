import React, { useState } from "react";
import Modal from "react-modal";
import { addMenu } from "../../Controller/GuestController";
import { v4 as uuidv4 } from "uuid";

function AddMenuModal({ callback,taskId }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  let handleSubmit = (event) => {
    if (event.target[0].value !== "" && event.target[1].value !== "" && event.target[2].value !== "" && event.target[3] !== "" ) {
      let data = {
        id: uuidv4(),
        userId: "2",
        store: event.target[0].value,
        name: event.target[1].value,
        price: parseInt(event.target[2].value),
        amount: parseInt(event.target[3].value),
        isConfirm: false,
        comment: "ไม่ใส่ถั่ว โบ๊ทไม่ชอบ",
      };
      addMenu(taskId,data, callback);
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
        <h2>Add</h2>
        <form style={{ padding: "10px" }} onSubmit={handleSubmit}>
          <input placeholder="Store" />
          <br />
          <input placeholder="Menu" />
          <br />
          <input type="number" placeholder="Price" />
          <br />
          <input type="number" placeholder="Amount" />
          <br />
          <input  placeholder="Comment" />
          <br />
          <button onClick={() => setIsOpen(false)}>close</button>
          <button type="submit"> ADD</button>
        </form>
      </Modal>
    </div>
  );
}

export { AddMenuModal };
