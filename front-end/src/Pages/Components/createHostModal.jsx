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
        borderRadius: "15px",
        background: "#FF8066",
        height: "150px",
        width: "22rem",
        padding: "1.2rem"
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
         <h2 style={{textAlign: "center",color:'white', fontSize:'1.25rem'}}>Add</h2>
        <form style={{marginTop: "15px", margin: "auto",paddingTop:'10px'}} onSubmit={handleSubmit}>
          <div style={{display:'flex', justifyContent:'space-around',flexWrap:'wrap'}}>
            <div style={{display:'flex', justifyContent:'between'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

              <input style={{ width: "100%" }} placeholder="Canteen" />
              <button style={{textAlign: "center", width: "50%", backgroundColor: "white", borderRadius: "5px", marginTop: '20px' }} onClick={() => setIsOpen(false)}>close</button>

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft:'1.5rem'}} >
              
              <input style={{ width: "100%" }} placeholder="Store" />
              <button style={{textAlign: "center", width: "50%", backgroundColor: "white", borderRadius: "5px", marginTop: '20px' }} onClick={() => {
                callback([1, 2, 3])
                setIsOpen(false);
              }}
              >
                submit
              </button>
            </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export { AddHostModal };
