import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "../atoms/Buttons";

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const Verification = styled.h2``;
const Actions = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
`;

export const CheckToast = ({
  onCancel,
  onOK,
  hideModal,
  verification,
  okWord,
  cancelWord,
  id,
}: any) => {
  const deleting = useCallback(() => {
    onOK(id);
    hideModal();
  }, [onOK, hideModal]);
  const cancel = useCallback(() => {
    onCancel();
  }, [onCancel]);
  return (
    <>
      <Container>
        <Verification>{verification}</Verification>
        <Actions>
          <Button type="danger" onClick={deleting}>
            {okWord}
          </Button>
          <Button type="primary" onClick={cancel}>
            {cancelWord}
          </Button>
        </Actions>
      </Container>
    </>
  );
};
