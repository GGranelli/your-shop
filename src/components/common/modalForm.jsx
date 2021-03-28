import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalForm = ({ show, close, formData }) => {
  const {
    nome,
    cognome,
    email,
    indirizzo,
    citta,
    provincia,
    nazione,
  } = formData;
  return (
    <Modal show={show} onHide={close}>
      <div className="modal-div">
        <h3>Grazie {nome} per averci contattato!</h3>
        <span className="modal-info">
          {nome} {cognome} <br />
          {email} <br />
          {citta} {provincia}, {indirizzo} <br />
          {nazione} <br />
        </span>
      </div>
      <button className="btn btn-secondary close-modal" onClick={close}>
        {" "}
        X{" "}
      </button>
    </Modal>
  );
};

export default ModalForm;
