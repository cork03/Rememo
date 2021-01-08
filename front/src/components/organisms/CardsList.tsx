import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";
import Button from "../atoms/Buttons";
import CreateCardModal from "../../containers/CreateCardModal";
import { Card } from "./Card";
import { ListFrameComponent } from "../atoms/ListFrame";

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 6px;
  margin-right: 30px;
  background: ${colors.listBackfround};
  height: 500px;
  overflow: hidden;
`;
const ListTop = styled.div`
  margin: 10px 5px 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ListTitle = styled.p`
  font-size: 20px;
`;
const Cards = styled.ul`
  height: 408px;
  margin: 0 5px 0 5px;
  overflow: scroll;
`;
export const CardsList = ({
  cards,
  showModal,
  hideModal,
  title,
  learned,
  settings,
  frameColor,
}: any) => {
  const { defaultLearnCount, checkDelete } = settings;
  const _showModal = useCallback(() => {
    showModal({
      component: <CreateCardModal defaultLearnCount={defaultLearnCount} />,
    });
  }, [showModal, hideModal]);

  return (
    <Container>
      <ListFrameComponent type={frameColor} />
      <ListTop>
        <ListTitle>{title}</ListTitle>
        {learned ? (
          <></>
        ) : (
          <Button type="card" onClick={_showModal}>
            ＋カードを追加する
          </Button>
        )}
      </ListTop>
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
      </Cards>
      <ListFrameComponent type={frameColor} />
    </Container>
  );
};
