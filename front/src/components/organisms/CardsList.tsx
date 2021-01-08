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
  margin-right: 30px;
  padding: 10px;
  background: ${colors.listBackfround};
`;
const ListTitle = styled.p`
  font-size: 20px;
`;
const Cards = styled.ul``;
export const CardsList = ({
  cards,
  showModal,
  hideModal,
  title,
  learned,
  settings,
}: any) => {
  const { defaultLearnCount, checkDelete } = settings;
  const _showModal = useCallback(() => {
    showModal({
      component: <CreateCardModal defaultLearnCount={defaultLearnCount} />,
    });
  }, [showModal, hideModal]);

  return (
    <Container>
      <ListTitle>{title}</ListTitle>
      <Cards>
        {cards.map((card: any) => {
          return (
            <Card
              card={card}
              showModal={showModal}
              checkDelete={checkDelete}
              learned={learned}
            />
          );
        })}
        {learned ? (
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
