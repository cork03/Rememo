import React, { useCallback, useEffect, useState } from "react";
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
const ListHeader = styled.div`
  display: flex;
`;
const ListTitle = styled.p`
  font-size: 20px;
`;
const Sort = styled.select``;

const Cards = styled.ul``;

export const MainBody = ({
  fetchCards,
  data,
  showModal,
  hideModal,
  postCard,
}: any) => {
  const dataValue = Object.values(data);
  const [sort, setSort] = useState(0);
  const [cards, setCards] = useState(dataValue);
  const _showModal = useCallback(() => {
    showModal({
      component: <CreateCardModal />,
    });
  }, [showModal, hideModal, postCard]);
  const compare = useCallback((a: any, b: any) => {
    const genreA = a.leanCount;
    const genreB = b.leanCount;
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }, []);
  const changeSortCategory = useCallback(
    (e) => {
      setSort(e.target.value);
    },
    [setSort]
  );
  const sortCategory = [
    { id: 1, name: "カテゴリ" },
    { id: 2, name: "learnCount" },
  ];
  useEffect(() => {
    fetchCards();
  }, [fetchCards]);
  return (
    <Container>
      <Width>
        <ListArea>
          <ListHeader>
            <ListTitle>今日の学習</ListTitle>
            <Sort value={sort} onChange={changeSortCategory}>
              <option value="0">ソート</option>
              {sortCategory.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </Sort>
          </ListHeader>

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
