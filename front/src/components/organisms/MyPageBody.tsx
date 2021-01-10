import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { counts, sortCategories } from "../../utils";
import Button from "../atoms/Buttons";

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
  display: flex;
`;
const UserInfo = styled.div`
  width: 100%;
`;
const Title = styled.h1``;
const InfoTexts = styled.ul`
  margin-left: 20px;
  margin-top: 20px;
  font-size: 20px;
`;
const InfoText = styled.li`
  margin-bottom: 10px;
`;
const SettingAera = styled.div`
  width: 100%;
`;
const Settings = styled.ul`
  margin-left: 20px;
  margin-top: 20px;
  font-size: 20px;
`;
const SettingsEl = styled.li`
  margin-bottom: 10px;
`;
const ButtonArea = styled.div`
  margin-left: 20px;
`;

export const MyPageBody = ({
  fetchUser,
  user,
  fetchUserSetting,
  userSettings,
  patchUserSettings,
}: any) => {
  const [count, setCount] = useState(3);
  const [sort, setSort] = useState(0);
  const [checkDelete, setCheckDelete] = useState(1);
  const { loginId, name } = user;
  const changeCount = useCallback(
    (e) => {
      setCount(e.target.value);
    },
    [setCount]
  );
  const changeCategory = useCallback(
    (e) => {
      setSort(e.target.value);
    },
    [setSort]
  );
  const changeCheckDelete = useCallback(
    (e) => {
      setCheckDelete(e.target.value);
    },
    [setCheckDelete]
  );
  const _patchUserSettings = useCallback(() => {
    patchUserSettings(
      {
        defaultSort: sort,
        defaultLearnCount: count,
        checkDelete,
      },
      userSettings.id
    );
  }, [patchUserSettings, sort, count, checkDelete, userSettings]);
  useEffect(() => {
    fetchUser();
    const fn = async () => {
      const userSettings = await fetchUserSetting();
      const { defaultSort, defaultLearnCount } = userSettings;
      let { checkDelete } = userSettings;
      if (checkDelete) {
        checkDelete = 1;
      } else {
        checkDelete = 0;
      }
      setCount(defaultLearnCount);
      setSort(defaultSort);
      setCheckDelete(checkDelete);
    };
    fn();
  }, []);
  return (
    <Container>
      <Width>
        <TopSpace>
          <UserInfo>
            <Title>Information</Title>
            <InfoTexts>
              <InfoText>user name: {name}</InfoText>
              <InfoText>email: {loginId}</InfoText>
            </InfoTexts>
          </UserInfo>
          <SettingAera>
            <Title>Settings</Title>
            <Settings>
              <SettingsEl>
                デフォルトのソート:
                <select value={sort} onChange={changeCategory}>
                  <option value="0">dafault</option>
                  {sortCategories.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                </select>
              </SettingsEl>
              <SettingsEl>
                デフォルトの再表示回数:
                <select value={count} onChange={changeCount}>
                  {counts.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </SettingsEl>
              <SettingsEl>
                削除の確認:
                <select value={checkDelete} onChange={changeCheckDelete}>
                  <option value={1}>する</option>
                  <option value={0}>しない</option>
                </select>
              </SettingsEl>
            </Settings>
            <ButtonArea>
              <Button type="primary" onClick={_patchUserSettings}>
                変更を保存
              </Button>
            </ButtonArea>
          </SettingAera>
        </TopSpace>
      </Width>
    </Container>
  );
};
