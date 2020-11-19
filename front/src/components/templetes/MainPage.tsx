import React from "react";
import styled from "styled-components";
import { MainHeader } from "../organisms/MainHeader";
import MainBody from "../../containers/MainBody";

const Container = styled.div``;

export const MainPage = () => {
  return (
    <Container>
      <MainHeader />
      <MainBody />
    </Container>
  );
};
