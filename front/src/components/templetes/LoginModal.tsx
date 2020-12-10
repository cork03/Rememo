import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { TextInput } from "../atoms/Input";
import { SignUpModal } from "./SignUpModal";
import Button from "../atoms/Buttons";

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
  const certify = useCallback(async () => {
    return await userLogin({
      payload: {
        loginId: mail,
        password,
      },
    });
  }, [userLogin, mail, password]);
  const gestCertify = useCallback(async () => {
    return await userLogin({
      payload: {
        loginId: "tsubasa",
        password: "tsubasa",
      },
    });
  }, [userLogin]);
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
      const user = await certify();
      if (user) {
        hideModal();
        history.push("/main");
      }
      unAuthorizedError();
    }
  }, [certify, hideModal, history, messageError]);
  const gestLogin = useCallback(async () => {
    await gestCertify();
    hideModal();
    history.push("/main");
  }, [gestCertify, hideModal, history]);
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
        <Button type="loginModalSkyBlue" onClick={login}>
          ログイン
        </Button>
        <Button type="loginModalPrimary" onClick={gestLogin}>
          ゲストユーザー
        </Button>
      </LoginArea>
      <UnLogin>
        登録してない方<SignUp onClick={forSignUP}>アカウント作成</SignUp>
      </UnLogin>
    </Container>
  );
};
