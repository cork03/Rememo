import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";

const ErrorMessageArea = styled.div`
  text-align: center;
  margin-top: 20px;
  color: ${colors.error};
`;

export const ErrorMessage = ({ errorMessage }: any) => {
  return <ErrorMessageArea>{errorMessage}</ErrorMessageArea>;
};
