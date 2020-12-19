import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginModal } from "../templetes/LoginModal";
import { SignUpModal } from "../templetes/SignUpModal";
import { colors } from "../../styles/Variables";

const Container = styled.div`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.baseColor};
  position: fixed;
`;
const Width = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  a {
    font-size: 40px;
    color: ${colors.baseBlue};
  }
`;
const Menus = styled.ul`
  color: ${colors.baseColor};
  display: flex;
`;
const Menu = styled.li`
  font-weight: 700;
  padding: 5px;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    color: ${colors.baseBlue};
  }
`;
export const Header = ({
  showModal,
  hideModal,
  createUser,
  userLogin,
}: any) => {
  const showLogin = useCallback(() => {
    showModal({
      component: (
        <LoginModal
          hideModal={hideModal}
          userLogin={userLogin}
          showModal={showModal}
          createUser={createUser}
        />
      ),
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
          <Link to="/">Rememo</Link>
        </Logo>
        <Menus>
          <Menu onClick={showSignUp}>新規登録</Menu>
          <Menu onClick={showLogin}>ログイン</Menu>
        </Menus>
      </Width>
    </Container>
  );
};
