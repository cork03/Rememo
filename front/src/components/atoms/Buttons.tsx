import styled from "styled-components";
import React from "react";
import { colors } from "../../styles/Variables";

export const Button = styled.a`
  min-width: 100px;
  text-align: center;
  color: white;
  padding: 4px 0;
  margin: 4px;
  border-radius: 6px;
  cursor: pointer;
`;

const TopButton = styled.a`
  min-width: 100px;
  text-align: center;
  color: white;
  padding: 4px 0;
  margin: 4px;
  border-radius: 6px;
  cursor: pointer;
`;

const ButtonBlue = styled(TopButton)`
  background: ${colors.baseBlue};
  border-bottom: 2px solid ${colors.darkBlue};
  &:hover {
    background: ${colors.darkBlue};
  }
`;

const ButtonSkyBlue = styled(TopButton)`
  background: ${colors.skyBlue};
  border-bottom: 2px solid ${colors.darkSkyBlue};
  &:hover {
    background: ${colors.darkSkyBlue};
  }
`;

export const SmallButtonGreen = styled(Button)`
  min-width: 50px;
  background: ${colors.buttonGreen};
  border-bottom: 2px solid #28a745;
  &:hover {
    background: #28a745;
  }
`;

export const AddCardButton = styled.a`
  width: 100%;
  display: block;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  :hover {
    background: ${colors.cardHover};
  }
`;

const map: any = {
  default: Button,
  primary: ButtonBlue,
  skyBlue: ButtonSkyBlue,
  small: SmallButtonGreen,
  card: AddCardButton,
};

const ButtonComponent = ({ type, onClick, children }: any) => {
  const component = map[type] || map.defalut;
  return React.createElement(component, { onClick }, children);
};

export default ButtonComponent;
