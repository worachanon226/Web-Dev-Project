import { createTask } from "../../Controller/HostController";
import { IoCloseSharp } from 'react-icons/io5';
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "../../userContext";
function AddHostModal({ callback }) {
  let {user} = useUserContext()
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      background: "#FF8066",
      height: "220px",
      width: "30%",
      padding: "1.2rem"
    },
  };
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
          <button onClick={() => setIsOpen(false)}><IoCloseSharp size={25} /></button>
        </div>
        <h2 style={{ textAlign: "center", color: 'white', fontSize: '1.5rem' }}>Add</h2>

        <form style={{ marginTop: "15px" }} onSubmit={handleSubmit}>
          <div className="d-flex gap-3 justify-content-center p-2">
            <input className="col w-auto rounded w-25" style={{ fontSize: '18px' }} placeholder="Canteen" />
            <input className="col w-auto rounded w-25" style={{ fontSize: '18px' }} placeholder="Max Tasks" />

          </div>

          <div className="d-flex gap-3 justify-content-center p-3">
            <button className="rounded bg-light w-25" style={{ fontSize: '18px' }} type="submit">ADD</button>
          </div>

          




        </form>
      </Modal>
    </div>
  );
}

export { AddHostModal };
