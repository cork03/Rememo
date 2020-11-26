import { constants } from "buffer";
import React, { useCallback, useState, useEffect } from "react";
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
const LinkArea = styled.div`
  display: flex;
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

export const CardModal = ({
  card,
  hideModal,
  checkCard,
  patchCard,
  deleteLink,
}: any) => {
  const [title, setTitle] = useState(card.title);
  const [body, setBody] = useState(card.body);
  const [links, setLinks] = useState({});
  const [newLinks, setNewLinks] = useState({});
  const [forAddLink, setForAddLink] = useState("");
  const [count, setCount] = useState(card.totalCount);
  const [id, setId] = useState(0);
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
  const patch = useCallback(() => {
    const linksValue = Object.values(links);
    const linkEl = linksValue.reduce((acc: any, item: any) => {
      acc.push({ id: item.id, string: item.string });
      return acc;
    }, []);
    const newLinksValue = Object.values(newLinks);
    const newLinkEl = newLinksValue.reduce((acc: any, item: any) => {
      acc.push(item.string);
      return acc;
    }, []);
    patchCard(
      {
        payload: {
          title,
          body,
          totalCount: count,
          categoryIds: [category],
          links: linkEl,
          newLinks: newLinkEl,
        },
      },
      card.id
    );
    hideModal();
  }, [patchCard, hideModal, title, body, count, category, links, newLinks]);
  const addLink = useCallback(() => {
    let test = newLinks;
    setId(id + 1);
    test = { ...test, [id]: { id, string: forAddLink } };
    setNewLinks({ ...newLinks, ...test });
    setForAddLink("");
  }, [forAddLink, setNewLinks, newLinks, id, setId, setForAddLink]);
  useEffect(() => {
    const links = card.cardLinks.reduce((acc: any, item: any) => {
      acc[item.id] = item;
      return acc;
    }, {});
    setLinks(links);
  }, []);
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
          {Object.values(links).map((link: any) => {
            const onChange = (text: string) => {
              const newItem = { ...link, string: text };
              const _links = { ...links, [link.id]: newItem };
              setLinks(_links);
            };
            const _deleteLink = () => {
              deleteLink(link.id);
            };
            return (
              <LinkArea>
                <Input
                  type="default"
                  value={link.string}
                  onChangeText={onChange}
                />
                <Button type="primary" onClick={_deleteLink}>
                  削除
                </Button>
              </LinkArea>
            );
          })}
          {Object.values(newLinks).map((link: any) => {
            const onChange = (text: string) => {
              const newItem = { ...link, string: text };
              const _links = { ...newLinks, [link.id]: newItem };
              setNewLinks(_links);
            };
            const _deleteLink = () => {
              deleteLink(link.id);
            };
            return (
              <LinkArea>
                <Input
                  type="default"
                  value={link.string}
                  onChangeText={onChange}
                />
                <Button type="primary" onClick={deleteLink}>
                  削除
                </Button>
              </LinkArea>
            );
          })}
          <LinkArea>
            <Input
              type="card"
              value={forAddLink}
              onChangeText={setForAddLink}
              placeholder="リンクを追加する"
            />
            <Button type="primary" onClick={addLink}>
              追加
            </Button>
          </LinkArea>
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
          <Button type="primary" onClick={patch}>
            変更を保存
          </Button>
          {card.checked ? (
            <></>
          ) : (
            <Button type="primary" onClick={check}>
              学習完了
            </Button>
          )}
        </Options>
      </Width>
    </Container>
  );
};
