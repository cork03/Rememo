import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/Variables";
import { TextInput } from "../atoms/Input";

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  cursor: pointer;
`;

const Title = styled.h2`
  text-align: center;
  margin: 30px 0;
`;

const InputArea = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const Text = styled.p`
  width: 160px;
`;

const LoginArea = styled.div`
  width: 100%;
  margin-top: 40px;
`;
const LoginButton = styled.a`
  text-align: center;
  color: ${colors.colorBlack};
  padding: 6px 0;
  border-radius: 6px;
  cursor: pointer;
  background: ${colors.buttonGreen};
  border-bottom: 2px solid #28a745;
  display: block;
  width: 200px;
  margin: 20px auto;
`;

const UnLogin = styled.div`
  text-align: center;
  margin: 30px 0;
`;
const SignUp = styled.a``;

export const LoginModal = ({ hideModal, userLogin }: any) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const closeModal = useCallback(() => {
    hideModal();
  }, [hideModal]);
  const history = useHistory();
  const asynchronous = useCallback(async () => {
    return await userLogin({
      payload: {
        loginId: mail,
        password,
      },
    });
  }, [userLogin, mail, password]);
  const login = useCallback(async () => {
    await asynchronous();
    hideModal();
    history.push("/main");
  }, [asynchronous, hideModal, history]);
  return (
    <Container>
      <CloseButton onClick={closeModal}>✖️</CloseButton>
      <Title>ログイン</Title>
      <InputArea>
        <Text>メールアドレス：</Text>
        <TextInput
          value={mail}
          onChangeText={setMail}
          placeholder="例：田中　太郎"
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
      <LoginArea>
        <LoginButton onClick={login}>ログイン</LoginButton>
        <LoginButton>ゲストユーザー</LoginButton>
      </LoginArea>
      <UnLogin>
        登録してない方<SignUp>アカウント作成</SignUp>
      </UnLogin>
    </Container>
  );
};
