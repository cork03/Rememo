import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import thinkImage from "../../images/think.jpg";
import Button from "../atoms/Buttons";
import { LoginModal } from "../templetes/LoginModal";
import { UserContext } from "../AuthenticatedPage";
import { SignUpModal } from "../templetes/SignUpModal";

const Container = styled.div`
  height: 100vh;
`;
const Width = styled.div`
  width: 65%;
  margin: auto;
  display: flex;
`;
const Descriptions = styled.div`
  margin-top: 150px;
  width: 50%;
`;
const Image = styled.img`
  height: 400px;
  width: auto;
  border-radius: 10px;
`;
const ProblemPresentation = styled.h1`
  margin-top: 30px;
`;
const Explanation = styled.div`
  margin-top: 20px;
  p {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;
const Guides = styled.div`
  display: flex;
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
        <Descriptions>
          <Image src={thinkImage} alt="" />
        </Descriptions>
        <Descriptions>
          <ProblemPresentation>効率的な記憶定着を！</ProblemPresentation>
          <Explanation>
            <p>
              Rememoでは<span>忘却曲線</span>に合わせた
            </p>
            <p>
              <span>想起学習</span>
              を行うことで記憶定着を
              <p />
              <p />
              効率化しています。
            </p>
          </Explanation>
          <Guides>
            <Button type="primary" onClick={showSignUp}>
              新規登録
            </Button>
            <Button type="skyBlue" onClick={showLogin}>
              ログイン
            </Button>
          </Guides>
        </Descriptions>
      </Width>
    </Container>
  );
};
