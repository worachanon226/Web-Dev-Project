import React,{useState} from 'react'
import Modal from 'react-modal';
function AddHostModal() {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div>
        <button onClick={()=>setIsOpen(true)}>ADD</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={()=>setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 >Add</h2>
          <button onClick={()=>setIsOpen(false)}>close</button>
          <form style={{padding:"10px"}}>
            <input  placeholder="bla bla bla" /><br />
            <input placeholder="bla bla bla" /><br />
            <input placeholder="bla bla bla" /><br />
          </form>
        </Modal>
      </div>
  )
}

export  {AddHostModal}