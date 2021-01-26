import styled from "styled-components";
import React from "react";
import { colors } from "../../styles/Variables";

const ListFrame = styled.div`
  color: white;
  height: 20px;
  align-items: center;
  display: flex;
`;
const ListFrameUnLearn = styled(ListFrame)`
  background-color: ${colors.baseBlue};
`;
const ListFrameLeraned = styled(ListFrame)`
  background-color: ${colors.baseOrange};
`;

const map: any = {
  default: ListFrame,
  blue: ListFrameUnLearn,
  orange: ListFrameLeraned,
};
export const ListFrameComponent = ({ type, children }: any) => {
  const component = map[type] || map.defalut;
  return React.createElement(component, {}, children);
};
