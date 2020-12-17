import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
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
  const cards = Object.values(data);
  const [sort, setSort] = useState(0);
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
        <TopSpace>
          <Sort value={sort} onChange={changeSortCategory}>
            <option value="0">ソート</option>
            {sortCategory.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </Sort>
          <ListArea>
            <CardsList
              learn={false}
              data={cards}
              showModal={showModal}
              hideModal={hideModal}
              sort={sort}
            />
            <CardsList
              learn
              data={cards}
              showModal={showModal}
              hideModal={hideModal}
              sort={sort}
            />
          </ListArea>
        </TopSpace>
      </Width>
    </Container>
  );
};
