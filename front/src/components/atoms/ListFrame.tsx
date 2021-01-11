import styled from "styled-components";
import React from "react";
import { colors } from "../../styles/Variables";

const ListFrame = styled.div`
  color: white;
  height: 20px;
  align-items: center;
  display: flex;
`;
const ListFrameBlue = styled(ListFrame)`
  background-color: ${colors.baseBlue};
`;
const ListFrameOrage = styled(ListFrame)`
  background-color: ${colors.baseOrange};
`;

const map: any = {
  default: ListFrame,
  blue: ListFrameBlue,
  orange: ListFrameOrage,
};
export const ListFrameComponent = ({ type, children }: any) => {
  const component = map[type] || map.defalut;
  return React.createElement(component, {}, children);
};
