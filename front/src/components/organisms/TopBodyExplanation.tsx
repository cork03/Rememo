import React from "react";
import styled from "styled-components";
import curveImage from "../../images/curve11.jpg";
import { colors } from "../../styles/Variables";

const Container = styled.div`
  background-color: ${colors.baseBlue};
  color: white;
  height: 100vh;
`;
const Width = styled.div`
  width: 65%;
  margin: auto;
  text-align: center;
`;
const Parts = styled.div``;
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

export const TopBodyExplanation = () => {
  return (
    <Container id="curve">
      <Width>
        <Parts>
          <Title>忘却曲線</Title>
          <Image src={curveImage} alt="" />
          <Explanation>
            <p>
              図のように、復習をしなかった学習内容は２ヶ月後には覚えている割合が20%にまで下がってしまいます。
            </p>
            <p>
              ですが、脳科学の研究による最適なタイミングでの復習により、記憶への定着率を大幅に上げることが出来ます。
            </p>
            <p>
              rememoではそのタイミングに合わせて、２日後、１週間後、１ヶ月後と復習することにより
              <br />
              ２ヶ月後の記憶定着率を20%から80%にまで引き上げます。
            </p>
          </Explanation>
        </Parts>
      </Width>
    </Container>
  );
};
