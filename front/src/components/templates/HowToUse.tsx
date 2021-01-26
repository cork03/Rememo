import React from "react";
import styled from "styled-components";
import Image1 from "../../images/HowToUse.jpg";
import Image2 from "../../images/HowToUse2.jpg";
import { device, imageMedia } from "../../styles/GlobalStyle";

const Container = styled.div``;
const Width = styled.div`
  width: 65%;
  margin: auto;
  text-align: center;
  @media ${device.tablet} {
    width: 80%;
  }
`;
const Parts = styled.div`
  padding-bottom: 30px;
`;
const Image = styled.img`
  height: 300px;
  width: auto;
  border-radius: 10px;
  margin-top: 50px;
  ${imageMedia}
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
const PartTitle = styled.h2`
  font-size: 20px;
  margin-top: 50px;
`;

export const HowToUse = () => {
  return (
    <Container>
      <Width>
        <Title>アプリの使用方法</Title>
        <Parts>
          <PartTitle>1.カードの作成</PartTitle>
          <Image src={Image1} alt="" />
          <Explanation>
            <p>[カードを追加する]ボタンを押すと、入力画面が現れます。</p>
            <p>
              タイトル、内容を入力し、参考にしたサイトなどあればURLを登録しましょう。
            </p>
            <p>
              学習する回数も選択でき、回数が少ないほど定着率は下がり、多いほど上昇します。
            </p>
            <p>カテゴリは自身で固有のカテゴリを追加し、それを活用します。</p>
            <p>[カードを作成]を押すと、リスト内にカードが作成されます。</p>
          </Explanation>
        </Parts>
        <Parts>
          <PartTitle>2.学習</PartTitle>
          <Image src={Image2} alt="" />
          <Explanation>
            <p>カードを開き内容を覚えたら、学習完了ボタンを押します。</p>
            <p>
              学習済みの欄にカードが移動し、移動したカードは２４時間後に欄から消えます。
            </p>
            <p>
              消えたカードは復習に最適なタイミングで[今日の学習]の欄に再表示されます。
            </p>
          </Explanation>
        </Parts>
      </Width>
    </Container>
  );
};
