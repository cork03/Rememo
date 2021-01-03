import React from "react";
import styled from "styled-components";
import Header from "../../containers/TopHeader";
import TopBody from "../../containers/TopBody";

const Container = styled.div``;

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <TopBody />
    </Container>
  );
};
