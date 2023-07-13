import React from "react";
import "./rsvpModal.css";
import { useDataContext } from "../context/context";

const RsvpModal = ({ isOpen }) => {
  const { modal, setModal } = useDataContext();

  return (
    <div>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
          <strong>
            <p>Complete your RSVP</p>
          </strong>
          <p>Fill in your personal Information</p>
          <label htmlFor="Name">
            <strong>Name:</strong>
          </label>
          <input type="text" id="Name" />
          <label htmlFor="email">
            {" "}
            <strong>Email:</strong>
          </label>
          <input type="email" id="email" />
          <p>* You have to make the payment at the venue</p>
          <button
            className="save-button"
            onClick={() => {
              setModal(!modal);
              //   updateBtnHandler();
              //   handleSave();
            }}
          >
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
};

export default RsvpModal;
