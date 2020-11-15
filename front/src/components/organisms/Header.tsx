import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonGreen } from "../atoms/Buttons";
import { LoginModal } from "../templetes/LoginModal";
import { SignUpModal } from "../templetes/SignUpModal";
import { colors } from "../../styles/Variables";

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: ${colors.baseColor};
`;
const Width = styled.div`
  width: 65%;
  margin: auto;
  display: flex;
  position: relative;
  align-items: center;
`;

const Logo = styled.div`
  margin: 0 auto;
  a {
    font-size: 70px;
    color: ${colors.baseColor};
  }
`;
const Menus = styled.div`
  position: absolute;
  right: 0;
  bottom: 20%;
  color: ${colors.baseColor};
  display: flex;
`;

export const Header = ({
  showModal,
  hideModal,
  createUser,
  userLogin,
}: any) => {
  const clear = useCallback(() => {
    localStorage.clear();
  }, []);
  const showLogin = useCallback(() => {
    showModal({
      component: <LoginModal hideModal={hideModal} userLogin={userLogin} />,
    });
  }, [showModal, hideModal, userLogin]);
  const showSignUp = useCallback(() => {
    showModal({
      component: <SignUpModal hideModal={hideModal} createUser={createUser} />,
    });
  }, [showModal, createUser, hideModal]);
  return (
    <Container>
      <Width>
        <Logo>
          <Link to="/" onClick={clear}>
            Rememo
          </Link>
        </Logo>
        <Menus>
          <ButtonGreen onClick={showSignUp}>新規登録</ButtonGreen>
          <ButtonGreen onClick={showLogin}>ログイン</ButtonGreen>
        </Menus>
      </Width>
    </Container>
  );
};
