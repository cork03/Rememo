import React from "react";
import styled from "styled-components";
import { Header } from "../components/organisms/Header";
import MyPageBody from "../containers/MyPageBody";

const Container = styled.div``;

export const MyPage = () => {
  return (
    <Container>
      <Header logIn />
      <MyPageBody />
    </Container>
  );
};
