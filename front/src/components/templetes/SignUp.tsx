import React  from "react";
import styled from "styled-components";
import {colors} from '../../styles/Variables'


const Container =styled.div`
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.h2`
  text-align: center;
  margin: 30px 0;
`;

const InputArea = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const Text = styled.p`
  width: 160px;
`
const Input =styled.input`
  border-radius: 6px;
  border: 1px solid ${colors.border};
  display: block;
  width: 100%;
  padding: 8px;
`;

const LodinArea = styled.div`
  width: 100%;
  margin-top: 40px;
`;
const LoginButton = styled.a`
  text-align: center;
  color: ${colors.colorBlack};
  padding: 6px 0;
  border-radius: 6px;
  cursor: pointer;
  background: ${colors.buttonGreen};
  border-bottom: 2px solid #28a745;
  display: block;
  width: 200px;
  margin: 20px auto;
`;




export const SignUpModal = () => {
    return (
        <Container>
            <Title>アカウント作成</Title>
            <InputArea>
              <Text>ユーザー名：</Text>
              <Input placeholder='例：田中　太郎'></Input>
            </InputArea>
            <InputArea>
              <Text>メールアドレス：</Text>
              <Input placeholder='例： taro@example.com'></Input>
            </InputArea>
            <InputArea>
              <Text>パスワード：</Text>
              <Input placeholder='6文字以上入力してください'></Input>
            </InputArea>
            <LodinArea>
              <LoginButton>アカウント作成</LoginButton>
            </LodinArea>
        </Container>
    )
}
