import styled from "styled-components";
import React from "react";
import { colors } from "../../styles/Variables";

export const Button = styled.a`
  min-width: 100px;
  text-align: center;
  color: ${colors.white};
  padding: 4px 0;
  margin: 4px;
  display: block;
  border-radius: 6px;
  cursor: pointer;
`;

const ButtonBlue = styled(Button)`
  background: ${colors.baseBlue};
  border-bottom: 2px solid ${colors.darkBlue};
  &:hover {
    background: ${colors.darkBlue};
  }
`;
const SmallButtonBlue = styled(ButtonBlue)`
  min-width: 50px;
`;
const ButtonSkyBlue = styled(Button)`
  background: ${colors.skyBlue};
  border-bottom: 2px solid ${colors.darkSkyBlue};
  &:hover {
    background: ${colors.darkSkyBlue};
  }
`;

const ButtonOrange = styled(Button)`
  background: ${colors.baseOrange};
  border-bottom: 2px solid ${colors.darkOrange};
  :hover {
    background: ${colors.darkOrange};
  }
`;
const SmallButtonOrange = styled(ButtonOrange)`
  min-width: 50px;
`;

const AddCardButton = styled.a`
  width: 100%;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  display: block;
  :hover {
    background: ${colors.cardHover};
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
`;

const LoginModalPrimary = styled(ButtonLoginModal)`
  background: ${colors.baseBlue};
  border-bottom: 2px solid ${colors.darkBlue};
  :hover {
    background: ${colors.darkBlue};
  }
`;
const LoginModalSkyBlue = styled(ButtonLoginModal)`
  background: ${colors.skyBlue};
  border-bottom: 2px solid ${colors.darkSkyBlue};
  &:hover {
    background: ${colors.darkSkyBlue};
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
