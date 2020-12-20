import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { sortCardList, sortCategories } from "../../modules";
import { CardsList } from "./CardsList";

const Container = styled.div`
  height: 100vh;
`;
const Width = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-top: 50px;
`;
const TopSpace = styled.div`
  margin-top: 100px;
`;
const ListArea = styled.div`
  display: flex;
`;

const Sort = styled.select``;

export const MainBody = ({ fetchCards, data, showModal, hideModal }: any) => {
  useEffect(() => {
    fetchCards();
  }, [fetchCards]);
  const [sort, setSort] = useState<number>(0);
  const cards = useMemo(() => {
    return sortCardList(Object.values(data), sort);
  }, [data, sort]);
  const changeSortCategory = useCallback(
    (e) => {
      setSort(e.target.value);
    },
    [setSort]
  );
  return (
    <Container>
      <Width>
        <TopSpace>
          <Sort value={sort} onChange={changeSortCategory}>
            <option value={0}>ソート</option>
            {sortCategories.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </Sort>
          <ListArea>
            <CardsList
              title="今日の学習"
              cards={cards.filter((card: any) => !card.checked)}
              showModal={showModal}
              hideModal={hideModal}
              addAble
            />
            <CardsList
              title="未学習"
              cards={cards.filter((card: any) => card.checked)}
              showModal={showModal}
              hideModal={hideModal}
            />
          </ListArea>
        </TopSpace>
      </Width>
    </Container>
  );
};
