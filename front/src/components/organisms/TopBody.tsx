import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;
const Width = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
`;

const Descriptions = styled.div`
  margin-top: 50px;
  width: 50%;
`;

export const TopBody = () => {
  return (
    <Container>
      <Width>
        <Descriptions>
          <h1>想起学習</h1>
          <p>dafjaksfhafdashjfasdahjfklafhasjhdfalkjhfdah</p>
          <p>dafjaksfhafdashjfasdahjfklafhasjhdfalkjhfdah</p>
          <p>dafjaksfhafdashjfasdahjfklafhasjhdfalkjhfdah</p>
          <p>dafjaksfhafdashjfasdahjfklafhasjhdfalkjhfdah</p>
          <p>dafjaksfhafdashjfasdahjfklafhasjhdfalkjhfdah</p>
        </Descriptions>
        <Descriptions>
          <h1>忘却曲線</h1>
          <p>dafjaksfhafdashjfasdahjfklafhasjhdfalkjhfdah</p>
          <p>dafjaksfhafdashjfasdahjfklafhasjhdfalkjhfdah</p>
          <p>dafjaksfhafdashjfasdahjfklafhasjhdfalkjhfdah</p>
          <p>dafjaksfhafdashjfasdahjfklafhasjhdfalkjhfdah</p>
        </Descriptions>
      </Width>
    </Container>
  );
};
