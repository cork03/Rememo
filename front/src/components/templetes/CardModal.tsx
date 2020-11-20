import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Buttons";
import Input from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";

const Container = styled.div``;

const Width = styled.div`
  margin: 10px auto;
`;
const TitleArea = styled.div``;
const Title = styled.label``;

const BodyArea = styled.div`
  margin-top: 30px;
`;
const BodyTitle = styled.label``;

const LinksArea = styled.div`
  margin-top: 20px;
`;
const LinksTitle = styled.label``;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CountArea = styled.div``;
const CountTitle = styled.label`
  margin-right: 7px;
`;

const CategoryArea = styled.div``;
const CategoryTitle = styled.label`
  margin-right: 7px;
`;

export const CardModal = ({ card, hideModal, checkCard }: any) => {
  const [title, setTitle] = useState(card.title);
  const [body, setBody] = useState(card.body);
  const [links, setLinks] = useState(card.links);
  const [count, setCount] = useState(3);
  const [category, setCategory] = useState(1);
  const counts = [2, 3, 4];
  const changeCount = useCallback(
    (e) => {
      setCount(e.target.value);
    },
    [setCount]
  );
  const changeCategory = useCallback(
    (e) => {
      setCategory(e.target.value);
    },
    [setCategory]
  );
  const check = useCallback(() => {
    checkCard(card.id);
    hideModal();
  }, [checkCard, hideModal]);
  console.log(card);
  return (
    <Container>
      <Width>
        <TitleArea>
          <Title>タイトル</Title>
          <Input type="default" value={title} onChangeText={setTitle} />
        </TitleArea>
        <BodyArea>
          <BodyTitle>説明</BodyTitle>
          <TextArea value={body} onChangeText={setBody} />
        </BodyArea>
        <LinksArea>
          <LinksTitle>参考サイト</LinksTitle>
          <Input
            type="card"
            value={links}
            onChangeText={setLinks}
            placeholder="リンクを追加する"
          />
        </LinksArea>
        <Options>
          <CountArea>
            <CountTitle>再表示回数</CountTitle>
            <select value={count} onChange={changeCount}>
              {counts.map((count: number) => {
                return <option value={count}>{count}</option>;
              })}
            </select>
          </CountArea>
          <CategoryArea>
            <CategoryTitle>カテゴリー</CategoryTitle>
            <select value={category} onChange={changeCategory}>
              <option value="1">選択</option>
            </select>
          </CategoryArea>
          <Button type="primary" onClick={check}>
            覚えた
          </Button>
        </Options>
      </Width>
    </Container>
  );
};
