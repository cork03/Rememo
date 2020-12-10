import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";
import { Card } from "./Card";
import Button from "../atoms/Buttons";
import CreateCardModal from "../../containers/CreateCardModal";

const Container = styled.div`
  height: 100vh;
`;
const Width = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  padding-top: 50px;
`;

const ListArea = styled.div`
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

export const MainBody = ({
  fetchCards,
  data,
  showModal,
  hideModal,
  postCard,
}: any) => {
  useEffect(() => {
    fetchCards();
  }, [fetchCards]);
  const cards = Object.values(data);
  const _showModal = useCallback(() => {
    showModal({
      component: <CreateCardModal />,
    });
  }, [showModal, hideModal, postCard]);
  return (
    <Container>
      <Width>
        <ListArea>
          <ListTitle>今日の学習</ListTitle>
          <Cards>
            {cards.map((card: any) => {
              if (!card.checked) {
                return <Card card={card} showModal={showModal} />;
              }
              return <></>;
            })}
            <Button type="card" onClick={_showModal}>
              ＋カードを追加する
            </Button>
          </Cards>
        </ListArea>
        <ListArea>
          <ListTitle>完了した学習</ListTitle>
          <Cards>
            {cards.map((card: any) => {
              if (card.checked) {
                return <Card card={card} showModal={showModal} />;
              }
              return <></>;
            })}
          </Cards>
        </ListArea>
      </Width>
    </Container>
  );
};
