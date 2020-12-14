import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";
import { Card } from "./Card";
import Button from "../atoms/Buttons";
import CreateCardModal from "../../containers/CreateCardModal";
import { CardsList } from "./CardsList";

const Container = styled.div`
  height: 100vh;
`;
const Width = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-top: 50px;
`;

const ListArea = styled.div`
  display: flex;
`;
const ListHeader = styled.div`
  display: flex;
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
  useEffect(() => {
    fetchCards();
  }, [fetchCards]);
  const cards = Object.values(data);
  const [sort, setSort] = useState(0);
  const _showModal = useCallback(() => {
    showModal({
      component: <CreateCardModal />,
    });
  }, [showModal, hideModal]);
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
  return (
    <Container>
      <Width>
        <Sort value={sort} onChange={changeSortCategory}>
          <option value="0">ソート</option>
          {sortCategory.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </Sort>
        <ListArea>
          <CardsList
            learn={false}
            cards={cards}
            showModal={showModal}
            hideModal={hideModal}
          />
          <CardsList
            learn
            cards={cards}
            showModal={showModal}
            hideModal={hideModal}
          />
        </ListArea>
      </Width>
    </Container>
  );
};
