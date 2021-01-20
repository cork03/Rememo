import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import Think from "../../images/think.jpg";
import { LoginModal } from "../templetes/LoginModal";
import { UserContext } from "../AuthenticatedPage";
import { SignUpModal } from "../templetes/SignUpModal";
import { TopBodyParts } from "./TopBodyParts";
import Button from "../atoms/Buttons";

const Container = styled.div``;
const Width = styled.div`
  width: 65%;
  margin: auto;
`;
const Summary = styled.div`
  height: 100vh;
  padding-top: 100px;
  margin: 0 auto;
  text-align: center;
`;

const TextPart = styled.div``;
const Image = styled.img`
  height: 200px;
  width: auto;
  border-radius: 80px;
`;
const SummaryTitle = styled.h1`
  padding-top: 40px;
  font-size: 30px;
  font-weight: 500;
`;

const Explanation = styled.div`
  margin-top: 50px;
  p {
    font-size: 17px;
    margin-bottom: 10px;
  }
`;
const Guides = styled.div`
  width: 40%;
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

export const TopBody = ({
  showModal,
  hideModal,
  createUser,
  userLogin,
}: any) => {
  const returnUser = useContext(UserContext);
  const showLogin = useCallback(() => {
    showModal({
      component: (
        <LoginModal
          hideModal={hideModal}
          userLogin={userLogin}
          showModal={showModal}
          createUser={createUser}
          returnUser={returnUser}
        />
      ),
    });
  }, [showModal, hideModal, userLogin]);
  const showSignUp = useCallback(() => {
    showModal({
      component: (
        <SignUpModal
          hideModal={hideModal}
          createUser={createUser}
          userLogin={userLogin}
          returnUser={returnUser}
        />
      ),
    });
  }, [showModal, createUser, hideModal]);
  return (
    <Container>
      <Width>
        <Summary>
          <Image src={Think} alt="" />
          <TextPart>
            <SummaryTitle>忘却曲線に沿って復習する学習サービス</SummaryTitle>
            <Explanation>
              <p>
                Rememoでは、忘却曲線に合わせた学習を
                <br />
                行うことで記憶定着を効率化します。
              </p>
            </Explanation>
            <Guides>
              <Button type="primary" onClick={showSignUp}>
                新規登録
              </Button>
              <Button type="skyBlue" onClick={showLogin}>
                ログイン
              </Button>
              <HashLink to="#curve" smooth>
                <Button type="danger">もっと詳しく </Button>
              </HashLink>
            </Guides>
          </TextPart>
        </Summary>
      </Width>
      <TopBodyParts />
    </Container>
  );
};
