import styled from "styled-components";
import React from "react";
import { colors } from "../../styles/Variables";

export const Button = styled.a`
  min-width: 100px;
  text-align: center;
  color: ${colors.white};
  padding: 4px 0;
  margin: 4px;
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
const ButtonSkyBlue = styled(Button)`
  background: ${colors.skyBlue};
  border-bottom: 2px solid ${colors.darkSkyBlue};
  &:hover {
    background: ${colors.darkSkyBlue};
  }
`;
const SmallButtonGreen = styled(Button)`
  min-width: 50px;
  background: ${colors.buttonGreen};
  border-bottom: 2px solid #28a745;
  &:hover {
    background: #28a745;
  }
`;
const AddCardButton = styled.a`
  width: 100%;
  display: block;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
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
  small: SmallButtonGreen,
  card: AddCardButton,
  loginModalPrimary: LoginModalPrimary,
  loginModalSkyBlue: LoginModalSkyBlue,
};

const ButtonComponent = ({ type, onClick, children }: any) => {
  const component = map[type] || map.defalut;
  return React.createElement(component, { onClick }, children);
};

export default ButtonComponent;
