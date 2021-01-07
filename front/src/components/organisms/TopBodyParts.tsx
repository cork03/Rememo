import React from "react";
import styled from "styled-components";
import curveImage from "../../images/curve.jpg";
import { colors } from "../../styles/Variables";

const Container = styled.div`
  background-color: ${colors.baseBlue};
  color: white;
  height: 100vh;
`;
const Width = styled.div`
  width: 65%;
  margin: auto;
  display: flex;
`;
const Parts = styled.div`
  margin-top: 200px;
  width: 50%;
`;
const Image = styled.img`
  height: 400px;
  width: auto;
  border-radius: 10px;
`;
const Explanation = styled.div`
  margin-top: 20px;
  p {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
const Title = styled.h1`
  padding-top: 40px;
  font-size: 25px;
  font-weight: 500;
`;

export const TopBodyParts = () => {
  return (
    <Container>
      <Width>
        <Parts>
          <Title>忘却曲線</Title>
          <Explanation>
            <p>人は復習をしないと20%の物事を忘れてしまいます。</p>
            <p>
              ですが、Rememoでは忘れる前に再度復習を行い高い記憶定着率を実現します。
            </p>
          </Explanation>
        </Parts>
        <Parts>
          <Image src={curveImage} alt="" />
        </Parts>
      </Width>
    </Container>
  );
};
