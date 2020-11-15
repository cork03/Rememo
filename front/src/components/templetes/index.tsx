import React from "react";
import styled from "styled-components";
import { Header } from "../organisms/Header";
import { TopBody } from "../organisms/TopBody";

const Container = styled.div``;

export const HomePage = ({
  showModal,
  hideModal,
  createUser,
  userLogin,
}: any) => {
  return (
    <Container>
      <Header
        showModal={showModal}
        hideModal={hideModal}
        createUser={createUser}
        userLogin={userLogin}
      />
      <TopBody />
    </Container>
  );
};
