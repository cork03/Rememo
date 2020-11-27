import React, { useCallback } from "react";
import styled from "styled-components";
import { CardModal } from "../templetes/CardModal";

const Content = styled.li`
  background-color: white;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

export const Card = ({
  card,
  showModal,
  hideModal,
  checkCard,
  patchCard,
  deleteLink,
  createCategory,
}: any) => {
  const showCard = useCallback(() => {
    showModal({
      component: (
        <CardModal
          card={card}
          hideModal={hideModal}
          checkCard={checkCard}
          patchCard={patchCard}
          deleteLink={deleteLink}
          createCategory={createCategory}
        />
      ),
    });
  }, [showModal, card, hideModal]);
  return <Content onClick={showCard}>{card.title}</Content>;
};
