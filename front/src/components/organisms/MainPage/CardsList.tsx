import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../styles/Variables";
import Button from "../../atoms/Buttons";
import CreateCardModal from "../../../containers/CreateCardModal";
import { Card } from "./Card";
import { ListFrameComponent } from "../../atoms/ListFrame";
import { device } from "../../../styles/GlobalStyle";

const Container = styled.div`
  width: 100%;
  border: 1px solid ${colors.listBorder};
  border-radius: 6px;
  margin-right: 30px;
  background: ${colors.listBackfround};
  height: 500px;
  overflow: hidden;
  @media ${device.tablet_laptop} {
    margin-right: 0;
  }
  @media ${device.tablet} {
    margin-bottom: 50px;
  }
`;
const ListTop = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ListTitle = styled.p`
  font-size: 20px;
  @media ${device.tablet_laptop} {
    font-size: 18px;
  }
`;
const Cards = styled.ul`
  height: 408px;
  margin: 0 10px 0 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
