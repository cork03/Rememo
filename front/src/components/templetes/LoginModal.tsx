import React,{useState}  from "react";
import styled from "styled-components";
import {colors} from '../../styles/Variables'
import { TextInput } from "../atoms/Input";


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
  width: 120px;
`

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

const UnLodin = styled.div`
  text-align: center;
  margin: 30px 0;
`;
const SignUp = styled.a`

`


export const LoginModal = () => {
  const [mail,setMail] = useState("")
  const [password,setPassword] = useState("")
    return (
        <Container>
            <Title>ログイン</Title>
            <InputArea>
              <Text>メールアドレス：</Text>
              <TextInput　value={mail} onChangeText={setMail} placeholder='例：田中　太郎'></TextInput>
            </InputArea>
            <InputArea>
              <Text>パスワード：</Text>
              <TextInput value={password} onChangeText={setPassword} placeholder='6文字以上入力してください'></TextInput>
            </InputArea>
            <LodinArea>
              <LoginButton>ログイン</LoginButton>
              <LoginButton>ゲストユーザー</LoginButton>
            </LodinArea>
            <UnLodin>
                登録してない方<SignUp>アカウント作成</SignUp>
            </UnLodin>



        </Container>
    )
}
