import React, { useState } from "react";
import "./Modal.css";
import BookNow from "./BookNow";
import { GrClose } from 'react-icons/gr';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="booking_button">
        Book Online
      </button>

      

      {modal && (
        <div className="modal">
        
          <div className="modal-content">
            <BookNow/>
            <button className="close-modal" onClick={toggleModal}>
              <GrClose/>
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}