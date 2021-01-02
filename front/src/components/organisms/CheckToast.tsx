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

export const CheckToast = ({ closeToast, deleteCard, hideModal, id }: any) => {
  const deleting = useCallback(() => {
    deleteCard(id);
    hideModal();
  }, [deleteCard, hideModal]);
  const cancel = useCallback(() => {
    closeToast();
  }, [closeToast]);
  return (
    <>
      <Container>
        <Verification>本当に削除しますか？</Verification>
        <Actions>
          <Button type="primary" onClick={deleting}>
            OK
          </Button>
          <Button type="danger" onClick={cancel}>
            キャンセル
          </Button>
        </Actions>
      </Container>
    </>
  );
};
