import React, { useState, useCallback, FC } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/Variables";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { TextInput } from "../atoms/Input";
import { SignUpModal } from "./SignUpModal";

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.h2`
  margin: 20px 0;
  text-align: center;
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
  margin-top: 30px;
  display: flex;
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
  min-width: 140px;
  margin: 0 auto;
`;

const UnLogin = styled.div`
  margin: 30px 0;
  text-align: center;
`;
const SignUp = styled.a`
  cursor: pointer;
  font-weight: 700;
  margin-left: 10px;
`;

export const LoginModal = ({
  hideModal,
  userLogin,
  showModal,
  createUser,
}: any) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const asynchronous = useCallback(async () => {
    return await userLogin({
      payload: {
        loginId: mail,
        password,
      },
    });
  }, [userLogin, mail, password]);
  const messageError = useCallback(() => {
    if (!mail) {
      setErrorMessage("メールアドレスを入力してください。");
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage("パスワードは６文字以上入力してください。");
      return;
    }
    return true;
  }, [setErrorMessage, mail, password, setMail, setPassword]);
  const unAuthorizedError = useCallback(() => {
    setMail("");
    setPassword("");
    setErrorMessage("メールアドレス、またはパスワードに誤りがあります。");
  }, [setMail, setPassword, setErrorMessage]);
  const login = useCallback(async () => {
    const noOmission = messageError();
    if (noOmission) {
      const user = await asynchronous();
      if (user) {
        hideModal();
        history.push("/main");
      }
      unAuthorizedError();
    }
  }, [asynchronous, hideModal, history, messageError]);
  const forSignUP = useCallback(() => {
    hideModal();
    showModal({
      component: <SignUpModal hideModal={hideModal} createUser={createUser} />,
    });
  }, [showModal, hideModal]);
  return (
    <Container>
      <Title>ログイン</Title>
      <InputArea>
        <Text>メールアドレス：</Text>
        <TextInput
          value={mail}
          onChangeText={setMail}
          placeholder="例：taro@example.com"
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
      {errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : <></>}
      <LoginArea>
        <LoginButton onClick={login}>ログイン</LoginButton>
        <LoginButton>ゲストユーザー</LoginButton>
      </LoginArea>
      <UnLogin>
        登録してない方<SignUp onClick={forSignUP}>アカウント作成</SignUp>
      </UnLogin>
    </Container>
  );
};
