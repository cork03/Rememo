import React from "react";
import styled from "styled-components";
import ImageCardFlow from "../../images/CardFlow.jpg";
import { colors } from "../../styles/Variables";

const Container = styled.div`
  background-color: ${colors.baseBlue};
  color: white;
`;
const Width = styled.div`
  width: 65%;
  margin: auto;
  text-align: center;
`;
const Parts = styled.div`
  padding-bottom: 70px;
`;
const Image = styled.img`
  height: 300px;
  width: auto;
  border-radius: 10px;
  margin-top: 50px;
`;
const Explanation = styled.div`
  margin-top: 20px;
  p {
    font-size: 17px;
    margin-bottom: 10px;
  }
`;
const Title = styled.h1`
  padding-top: 60px;
  font-size: 25px;
  font-weight: 500;
`;

export const CardFlow = () => {
  return (
    <Container>
      <Width>
        <Title>カードの流れ</Title>
        <Parts>
          <Image src={ImageCardFlow} alt="" />
        </Parts>
      </Width>
    </Container>
  );
};
