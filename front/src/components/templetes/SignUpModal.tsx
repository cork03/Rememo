import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { TextInput } from "../atoms/Input";

const Container = styled.div`
  position: relative;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  cursor: pointer;
`;
const Width = styled.div`
  margin: 30px auto;
  width: 70%;
`;

const Title = styled.h2`
  text-align: center;
  margin: 0;
`;

const InputArea = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const Text = styled.p`
  width: 160px;
`;

const LodinArea = styled.div`
  width: 100%;
  margin-top: 40px;
`;
const LoginButton = styled.a`
  text-align: center;
  color: ${colors.white};
  padding: 6px 0;
  border-radius: 6px;
  cursor: pointer;
  background: ${colors.baseBlue};
  border-bottom: 2px solid ${colors.darkBlue};
  display: block;
  width: 200px;
  margin: 20px auto;
  :hover {
    background-color: ${colors.darkBlue};
  }
`;

export const SignUpModal = ({ createUser, hideModal }: any) => {
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const messageError = useCallback(() => {
    if (!userName) {
      setErrorMessage("ユーザー名を入力してください");
      return;
    }
    if (!mail) {
      setErrorMessage("メールアドレスを入力してください");
      return;
    }
    if (!password) {
      setErrorMessage("パスワードは６文字以上入力してください");
      return;
    }
    return true;
  }, [setErrorMessage, userName, mail, password, setMail, setPassword]);
  const onSubmit = useCallback(() => {
    const noOmission = messageError();
    if (noOmission) {
      createUser({
        payload: {
          loginId: mail,
          name: userName,
          password,
        },
      });
    }
  }, [createUser, userName, mail, password]);
  return (
    <Container>
      <Width>
        <Title>アカウント作成</Title>
        <InputArea>
          <Text>ユーザー名：</Text>
          <TextInput
            value={userName}
            onChangeText={setUserName}
            placeholder="例：田中　太郎"
          />
        </InputArea>
        <InputArea>
          <Text>メールアドレス：</Text>
          <TextInput
            value={mail}
            onChangeText={setMail}
            placeholder="例： taro@example.com"
          />
        </InputArea>
        <InputArea>
          <Text>パスワード：</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="6文字以上入力してください"
          />
        </InputArea>
        <ErrorMessage errorMessage={errorMessage} />
        <LodinArea>
          <LoginButton onClick={onSubmit}>アカウント作成</LoginButton>
        </LodinArea>
      </Width>
    </Container>
  );
};
