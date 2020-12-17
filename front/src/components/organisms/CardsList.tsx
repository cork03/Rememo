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
export const CardsList = ({ data, showModal, hideModal, learn, sort }: any) => {
  const [cards, setCards] = useState([]);
  const _showModal = useCallback(() => {
    showModal({
      component: <CreateCardModal />,
    });
  }, [showModal, hideModal]);
  useEffect(() => {
    if (sort === 0) {
      setCards(data);
    } else {
      const compare = (a: any, b: any): any => {
        let _a = null;
        let _b = null;
        let comparison = 0;
        if (sort === "2") {
          _a = a.leanCount;
          _b = b.leanCount;
        }
        if (sort === "1") {
          _a = a.userCategories[0].id;
          _b = b.userCategories[0].id;
        }
        if (_a > _b) {
          comparison = 1;
        } else if (_a < _b) {
          comparison = -1;
        }
        return comparison;
      };
      const forSortCards = [...data];
      const _cards: any = forSortCards.sort(compare);
      setCards(_cards);
    }
  }, [data, sort]);
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
