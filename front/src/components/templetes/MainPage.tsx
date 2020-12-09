import React from "react";
import styled from "styled-components";

import MainBody from "../../containers/MainBody";
import { Header } from "../organisms/Header";

const Container = styled.div``;

export const MainPage = () => {
  return (
    <Container>
      <Header />
      <MainBody />
    </Container>
  );
};
