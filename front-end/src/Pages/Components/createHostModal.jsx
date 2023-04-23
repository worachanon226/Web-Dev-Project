import React, { useState } from "react";
import Modal from "react-modal";
import { createTask } from "../../Controller/HostController";
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

  let handleSubmit = (event) => {
    let data = {
      //get from context
      id:"1",
      userId:"1",
      canteen:event.target[0].value
    } 
    createTask(data,callback)
    setIsOpen(false)
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
          <input placeholder="Canteen" />
          <br />
          <button onClick={() => setIsOpen(false)}>close</button>
        <button
        type="submit"
        > ADD
        </button>
        </form>
        
         
      </Modal>
    </div>
  );
}

export { AddHostModal };
