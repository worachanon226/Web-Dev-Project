// import { createTask } from "../../Controller/HostController";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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

  let handleSubmit = (event) => {
    if (event.target[0].value !== "" && event.target[1].value !== "") {
      let data = {
        //get from context
        id: uuidv4(),
        userId: "1",
        canteen: event.target[0].value,
        maxTasks: event.target[1].value,
      };
      // createTask(data, callback);
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
          <input placeholder="Canteen" />
          <br />
          <input type="number" placeholder="Max Tasks" />
          <br />
          <button onClick={() => setIsOpen(false)}>close</button>
          <button type="submit"> ADD</button>
        </form>
      </Modal>
    </div>
  );
}

export { AddHostModal };
