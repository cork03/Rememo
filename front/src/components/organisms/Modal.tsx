import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { colors } from "../../styles/Variables";

Modal.setAppElement("#root");
const Container = styled.div`
  margin: 2px;
  border: 2px solid ${colors.cardBorder};
  border-radius: 10px;
`;
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
      <Container>
        <CloseButtonArea>
          <CloseButton onClick={hideModal}>✖️</CloseButton>
        </CloseButtonArea>
        {component}
      </Container>
    </Modal>
  );
};

export default ModalContainer;
