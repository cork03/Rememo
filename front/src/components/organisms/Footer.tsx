import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";

const Container = styled.div`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.baseBlue};
  height: 50px;
`;
const Width = styled.div`
  width: 65%;
  margin: 0 auto;
  text-align: right;
`;
const CopyRight = styled.h3`
  padding-top: 14px;
`;

export const Footer = () => {
  return (
    <Container>
      <Width>
        <CopyRight>© 2021 rememo</CopyRight>
      </Width>
    </Container>
  );
};
