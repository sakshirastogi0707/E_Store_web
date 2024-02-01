import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export function useCustomModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOption("");
  };

  const CustomModalWrapper = ({ children, heading }) => (
    <Modal show={isModalOpen} onHide={closeModal} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center mb-lg-3">
        {children}
      </Modal.Body>
    </Modal>
  );

  return {
    openModal,
    closeModal,
    CustomModalWrapper,
    selectedOption,
    setSelectedOption,
  };
}
