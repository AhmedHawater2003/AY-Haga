import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AnnouncementPopUp = ({ show, back }) => {
  const handleClose = () => {
    back();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Be carful!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dolores quasi tempore rerum atque doloribus vel voluptatibus? Nobis
            amet, laboriosam nemo laudantium odit eligendi autem sint quo eius
            quas magni!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AnnouncementPopUp;
