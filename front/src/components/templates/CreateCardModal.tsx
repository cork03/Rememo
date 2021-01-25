import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import Button, { LinkButton } from "../atoms/Buttons";
import Input from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import { counts } from "../../utils";
import { ErrorMessage } from "../atoms/ErrorMessage";

const Container = styled.div`
  margin: 10px;
`;

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
  margin-top: 10px;
`;

const LinksTitle = styled.label``;

const Options = styled.div`
  margin-top: 20px;
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
const NewCategoryArea = styled.div`
  display: flex;
`;

const SubmitArea = styled.div`
  margin-top: 15px;
  display: flex;
  text-align: right;
  justify-content: flex-end;
`;

export const CreateCardModal = ({
  hideModal,
  createCategory,
  userCategories,
  fetchCategory,
  postCard,
  defaultLearnCount,
}: any) => {
  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [newLinks, setNewLinks] = useState({});
  const [forAddLink, setForAddLink] = useState("");
  const [count, setCount] = useState(defaultLearnCount);
  const [id, setId] = useState(0);
  const [category, setCategory] = useState(0);
  const [forAddCategory, setForAddCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const messageError = useCallback(() => {
    if (!title) {
      setErrorMessage("タイトルを入力してください");
      return;
    }
    if (!body) {
      setErrorMessage("内容を入力してください");
      return;
    }
    if (category == 0) {
      setErrorMessage("カテゴリを選択してください");
      return;
    }
    return true;
  }, [setErrorMessage, title, body, category]);
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
  const addLink = useCallback(() => {
    if (forAddLink === "") {
      setErrorMessage("リンク名を入力してください");
      return;
    }
    let test = newLinks;
    setId(id + 1);
    test = { ...test, [id]: { id, string: forAddLink } };
    setNewLinks({ ...newLinks, ...test });
    setForAddLink("");
  }, [forAddLink, setNewLinks, newLinks, id, setId, setForAddLink]);
  const addCategory = useCallback(() => {
    if (forAddCategory === "") {
      setErrorMessage("カテゴリーを入力してください");
      return;
    }
    createCategory({
      payload: {
        userCategories: {
          name: forAddCategory,
        },
      },
    });
    setForAddCategory("");
    setErrorMessage("");
  }, [createCategory, forAddCategory, setForAddCategory, setErrorMessage]);
  const createCard = useCallback(() => {
    const noOmission = messageError();
    if (noOmission) {
      const newLinksValue = Object.values(newLinks);
      const newLinkEl = newLinksValue.reduce((acc: any, item: any) => {
        acc.push(item.string);
        return acc;
      }, []);
      const payload: any = {
        title,
        body,
        totalCount: count,
        categoryIds: [category],
        checked: 0,
      };
      if (newLinksValue.length === 0) {
        postCard({
          payload,
        });
      } else {
        payload.links = newLinkEl;
        postCard({
          payload,
        });
      }
      hideModal();
    }
  }, [postCard, newLinks, title, body, count, category, hideModal]);
  const categories = Object.values(userCategories);

  return (
    <Container>
      <Width>
        <TitleArea>
          <Title>
            <i className="fas fa-pen" />
            タイトル
          </Title>
          <Input
            type="default"
            value={title}
            onChangeText={setTitle}
            placeholder="例：デジタルトランスフォーメーション(DX)"
          />
        </TitleArea>
        <BodyArea>
          <BodyTitle>
            <i className="fas fa-book-open" />
            内容
          </BodyTitle>
          <TextArea
            value={body}
            onChangeText={setBody}
            placeholder="例：ITの浸透が、人々の生活をあらゆる面でより良い方向に変化させるという概念"
          />
        </BodyArea>
        <LinksArea>
          <LinksTitle>
            <i className="fas fa-paperclip" />
            参考サイト
          </LinksTitle>
          {Object.values(newLinks).map((link: any) => {
            const onChange = (text: string) => {
              const newItem = { ...link, string: text };
              const _links = { ...newLinks, [link.id]: newItem };
              setNewLinks(_links);
            };
            const _deleteLink = () => {
              const _links: any = { ...newLinks };
              delete _links[link.id];
              setNewLinks(_links);
            };
            return (
              <LinkArea>
                <Input
                  type="default"
                  value={link.string}
                  onChangeText={onChange}
                />
                <LinkButton
                  href={link.string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt" />
                </LinkButton>
                <Button type="smallDanger" onClick={_deleteLink}>
                  <i className="fas fa-trash" />
                </Button>
              </LinkArea>
            );
          })}
          <LinkArea>
            <Input
              type="dafalut"
              value={forAddLink}
              onChangeText={setForAddLink}
              placeholder="例:http://www.example.com  ==>  入力後は+ボタンを押してください"
            />
            <Button type="smallBlue" onClick={addLink}>
              <i className="fas fa-plus-circle" />
            </Button>
          </LinkArea>
        </LinksArea>
        <Options>
          <CountArea>
            <CountTitle>学習回数</CountTitle>
            <select value={count} onChange={changeCount}>
              {counts.map((count: number) => {
                return <option value={count}>{count}</option>;
              })}
            </select>
          </CountArea>
          <CategoryArea>
            <CategoryTitle>カテゴリー</CategoryTitle>
            <select value={category} onChange={changeCategory}>
              <option value="0">選択</option>
              {categories.map((category: any) => {
                return <option value={category.id}>{category.name}</option>;
              })}
            </select>
          </CategoryArea>
          <NewCategoryArea>
            <Input
              type="default"
              value={forAddCategory}
              onChangeText={setForAddCategory}
              placeholder="カテゴリーを追加する"
            />
            <Button type="smallBlue" onClick={addCategory}>
              <i className="fas fa-plus-circle" />
            </Button>
          </NewCategoryArea>
        </Options>
        <ErrorMessage errorMessage={errorMessage} />
        <SubmitArea>
          <Button type="primary" onClick={createCard}>
            カードを作成
          </Button>
        </SubmitArea>
      </Width>
    </Container>
  );
};
