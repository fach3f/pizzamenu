"use client";
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Example() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Button color="primary" onClick={toggleModal}>
        Open Modal
      </Button>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalBody>
          Content of the modal goes here.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
