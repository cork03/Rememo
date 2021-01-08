import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { sortCardList, sortCategories } from "../../utils";
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

export const MainBody = ({
  fetchCards,
  data,
  showModal,
  hideModal,
  fetchUserSetting,
  userSettings,
}: any) => {
  useEffect(() => {
    fetchCards();
    const fn = async () => {
      const _userSettings = await fetchUserSetting();
      const { defaultSort } = _userSettings;
      setSort(defaultSort);
    };
    fn();
  }, []);

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
  if (!userSettings) {
    return null;
  }
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
              settings={userSettings}
            />
            <CardsList
              title="学習済み"
              cards={cards.filter((card: any) => card.checked)}
              showModal={showModal}
              hideModal={hideModal}
              settings={userSettings}
              learned
            />
          </ListArea>
        </TopSpace>
      </Width>
    </Container>
  );
};
