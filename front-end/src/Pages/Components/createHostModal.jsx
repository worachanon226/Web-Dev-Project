import React, { useState } from "react";
import Modal from "react-modal";
function AddHostModal({ callback }) {
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

  let handleSubmit = () => {};
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>ADD</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Add</h2>
        <form style={{ padding: "10px" }} onSubmit={handleSubmit}>
          <input placeholder="Canteen" />
          <br />
          <input placeholder="Store" />
          <br />
        </form>
        <button onClick={() => setIsOpen(false)}>close</button>
        <button
          onClick={() => {
            callback([1,2,3])
            setIsOpen(false);
          }}
        >
          close
        </button>
      </Modal>
    </div>
  );
}

export { AddHostModal };
