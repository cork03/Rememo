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

export const MyPageBody = ({
  fetchUser,
  user,
  fetchUserSetting,
  userSettings,
}: any) => {
  const { loginId, name } = user;
  useEffect(() => {
    fetchUser();
    fetchUserSetting();
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
                <select>
                  <option value="0">なし</option>
                </select>
              </SettingsEl>
              <SettingsEl>
                デフォルトの再表示回数:
                <select>
                  <option value="0">なし</option>
                </select>
              </SettingsEl>
              <SettingsEl>削除の確認</SettingsEl>
            </Settings>
          </SettingAera>
        </TopSpace>
      </Width>
    </Container>
  );
};
