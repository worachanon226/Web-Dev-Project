import { createTask } from "../../Controller/HostController";
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
      borderRadius: "15px",
      background: "#FF8066",
      height: "150px",
      width: "22rem",
      padding: "1.2rem"
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  let handleSubmit = (event) => {
    if (event.target[0].value !== "" && event.target[1].value !== "") {
      let data = {
        //get from context
        id: uuidv4(),
        userId: "2",
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
        <h2 style={{ textAlign: "center", color: 'white', fontSize: '1.25rem' }}>Add</h2>

        <form style={{ marginTop: "15px", margin: "auto", paddingTop: '10px' }} onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', justifyContent: 'between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input style={{ width: "100%" }} placeholder="Canteen" />
       
                <button style={{ textAlign: "center", width: "50%", backgroundColor: "white", borderRadius: "5px", marginTop: '20px' }} onClick={() => setIsOpen(false)}>close</button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '1.5rem' }} >
                <input style={{ width: "100%" }} placeholder="Max Tasks" />
                <button style={{ textAlign: "center", width: "50%", backgroundColor: "white", borderRadius: "5px", marginTop: '20px' }} type="submit" >
                  submit
                </button>
              </div>

            </div>
          </div>
        </form>
      </Modal>
    </div >
  );
}

export { AddHostModal };
