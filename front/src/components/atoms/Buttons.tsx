import styled from "styled-components";
import React from "react";
import { colors } from "../../styles/Variables";

export const Button = styled.a`
  min-width: 100px;
  text-align: center;
  color: ${colors.white};
  padding: 4px 0;
  margin: 4px;
  display: inline-block;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.4s;
  :hover {
  }
`;

const ButtonBlue = styled(Button)`
  color: ${colors.baseBlue};
  border: 2px solid ${colors.baseBlue};
  :hover {
    background-color: ${colors.baseBlue};
    border-color: ${colors.baseBlue};
    color: #fff;
  }
`;
const SmallButtonBlue = styled(ButtonBlue)`
  min-width: 50px;
`;
const ButtonSkyBlue = styled(Button)`
  color: ${colors.skyBlue};
  border: 2px solid ${colors.skyBlue};
  :hover {
    background-color: ${colors.skyBlue};
    border-color: ${colors.skyBlue};
    color: #fff;
  }
`;

const ButtonOrange = styled(Button)`
  color: ${colors.baseOrange};
  border: 2px solid ${colors.baseOrange};
  :hover {
    background-color: ${colors.baseOrange};
    border-color: ${colors.baseOrange};
    color: #fff;
  }
`;
const SmallButtonOrange = styled(ButtonOrange)`
  min-width: 50px;
`;
export const LinkButton = styled.a`
  min-width: 50px;
  text-align: center;
  padding: 4px 1px 5px 6px;
  margin: 4px;
  border-radius: 6px;
  cursor: pointer;
  color: ${colors.skyBlue};
  border: 2px solid ${colors.skyBlue};
  :hover {
    background-color: ${colors.skyBlue};
    border-color: ${colors.skyBlue};
    color: #fff;
  }
`;

const AddCardButton = styled.a`
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 5px;
  color: ${colors.baseBlue};
  border: 2px solid ${colors.baseBlue};
  transition: 0.4s;
  font-size: 12px;
  :hover {
    background-color: ${colors.baseBlue};
    border-color: ${colors.baseBlue};
    color: #fff;
  }
`;

const ButtonLoginModal = styled.a`
  text-align: center;
  color: ${colors.white};
  padding: 6px 0;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  min-width: 140px;
  margin: 0 auto;
  transition: 0.4s;
`;

const LoginModalPrimary = styled(ButtonLoginModal)`
  color: ${colors.baseBlue};
  border: 2px solid ${colors.baseBlue};
  :hover {
    background-color: ${colors.baseBlue};
    border-color: ${colors.baseBlue};
    color: #fff;
  }
`;
const LoginModalSkyBlue = styled(ButtonLoginModal)`
  color: ${colors.skyBlue};
  border: 2px solid ${colors.skyBlue};
  :hover {
    background-color: ${colors.skyBlue};
    border-color: ${colors.skyBlue};
    color: #fff;
  }
`;

const map: any = {
  default: Button,
  primary: ButtonBlue,
  skyBlue: ButtonSkyBlue,
  smallBlue: SmallButtonBlue,
  danger: ButtonOrange,
  smallDanger: SmallButtonOrange,
  card: AddCardButton,
  loginModalPrimary: LoginModalPrimary,
  loginModalSkyBlue: LoginModalSkyBlue,
};

const ButtonComponent = ({ type, onClick, children }: any) => {
  const component = map[type] || map.defalut;
  return React.createElement(component, { onClick }, children);
};

export default ButtonComponent;
