import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";
import Button from "../atoms/Buttons";
import CreateCardModal from "../../containers/CreateCardModal";
import { Card } from "./Card";

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 6px;
  margin-top: 100px;
  margin-right: 30px;
  padding: 10px;
  background: ${colors.listBackfround};
`;
const ListTitle = styled.p`
  font-size: 20px;
`;
const Cards = styled.ul``;
export const CardsList = ({ cards, showModal, hideModal, learn }: any) => {
  const _showModal = useCallback(() => {
    showModal({
      component: <CreateCardModal />,
    });
  }, [showModal, hideModal]);
  return (
    <Container>
      <ListTitle>{learn ? "学習済み" : "未学習"}</ListTitle>
      <Cards>
        {learn
          ? cards.map((card: any) => {
              if (card.checked) {
                return <Card card={card} showModal={showModal} />;
              }
              return <></>;
            })
          : cards.map((card: any) => {
              if (!card.checked) {
                return <Card card={card} showModal={showModal} />;
              }
              return <></>;
            })}
        {learn ? (
          <></>
        ) : (
          <Button type="card" onClick={_showModal}>
            ＋カードを追加する
          </Button>
        )}
      </Cards>
    </Container>
  );
};
