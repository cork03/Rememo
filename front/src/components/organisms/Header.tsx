import React,{useCallback} from "react";
import styled from "styled-components";
import { ButtonGreen } from "../atoms/Buttons"
import { Link } from 'react-router-dom'


const Container = styled.div`
  width: 100%;
  background-color: black;
  color: rgb(255,255,240);
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
  }
`;
const Menus = styled.div`
  position: absolute;
  right: 0;
  bottom: 20%;
  display: flex;
`;


export const Header = ({show}: any) => {
  console.log(show)
  const _show = useCallback(() => {
    show()
  },[show])
  return (
    <Container>
      <Width>
        <Logo>
          <Link to='/'>Rememo</Link>
        </Logo>
        <Menus>
            <ButtonGreen onClick={_show}>
              新規登録
            </ButtonGreen>
            <ButtonGreen>
              ログイン
            </ButtonGreen>
        </Menus>
      </Width>
    </Container>
  );
};


