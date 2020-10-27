import React from "react";
import styled from "styled-components";
import {colors} from '../../styles/Variables'

const Container = styled.div`
  color: ${colors.colorBlack};
`
const Width = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
`

const Descriptions =styled.div`
  margin-top: 50px;
  width: 50%;
`

export const MainBody = () => {
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
    )
}
