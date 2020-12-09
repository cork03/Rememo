import React, { useCallback } from "react";
import styled from "styled-components";
import CardModal from "../../containers/CardModal";
import { colors } from "../../styles/Variables";

const Content = styled.li`
  background-color: ${colors.card};
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

export const Card = ({ card, showModal }: any) => {
  const showCard = useCallback(() => {
    showModal({
      component: <CardModal card={card} />,
    });
  }, [card]);
  return <Content onClick={showCard}>{card.title}</Content>;
};
