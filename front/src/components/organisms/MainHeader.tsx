import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { colors } from '../../styles/Variables'

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
  a{
    font-size: 70px;
    color: ${colors.baseColor};
  }
`;


export const MainHeader = ({showModal,hideModal,createUser}: any) => {
  return (
    <Container>
      <Width>
        <Logo>
          <Link to='/'>Rememo</Link>
        </Logo>
      </Width>
    </Container>
  );
};
