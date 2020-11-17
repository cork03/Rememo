import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

const CloseButtonArea = styled.div`
  text-align: right;
`;
const CloseButton = styled.span`
  cursor: pointer;
  font-size: 30px;
`;

const ModalContainer = ({ show, component, hideModal }: any) => {
  if (!show) {
    return <></>;
  }
  return (
    <Modal className="ReactModal__Content__modal" isOpen={show}>
      <CloseButtonArea>
        <CloseButton onClick={hideModal}>✖️</CloseButton>
      </CloseButtonArea>
      {component}
    </Modal>
  );
};

export default ModalContainer;
