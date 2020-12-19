import React, { useCallback, useMemo, useEffect, useState } from "react";
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

const sortCategory = {
  { id: 1, name: "カテゴリ", sort: sortByCategory },
  { id: 2, name: "learnCount", sort: sortBy('learnCount') },
};

const sortByCategory = (data: any[]) => {
  data.sort((a, b) => {
    if (a.userCategories[0].id > b.userCategories[0].id) {
      return 1
    }
    if (a.userCategories[0].id == b.userCategories[0].id) {
      return 0
    }
    return -1
  })
}

const sortBy = (attr: string) => (data: any[]) => {
  data.sort((a, b) => {
    if (a[attr] > b[attr]) {
      return 1
    }
    if (a[attr] == b[attr]) {
      return 0
    }
    return -1
  })
}

const sortCardList = (data: any[], sortId: number) => {
  const newData  = [...data]
  const category = sortCategory.find(item => item.id === sortId)
  if (!category) {
    return newData
  }

  category.sort(newData)
  return newData
};

export const MainBody = ({ fetchCards, data, showModal, hideModal }: any) => {
  useEffect(() => {
    fetchCards();
  }, []);

  const [sort, setSort] = useState(0);
  const cards = useMemo(() => {
    return sortCardList(Object.values(data), sort)
  }, [data, sort])

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
            <option value="0">ソート</option>
            {sortCategory.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </Sort>
          <ListArea>
            <CardsList
              addable
              title="未学習"
              data={cards.filter(card => !card.checked)}
              showModal={showModal}
              hideModal={hideModal}
            />
            <CardsList
              title="学習済み"
              data={cards.filter(card => card.checked)}
              showModal={showModal}
              hideModal={hideModal}
            />
          </ListArea>
        </TopSpace>
      </Width>
    </Container>
  );
};
