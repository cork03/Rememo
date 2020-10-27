import styled from "styled-components";
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

export const ButtonGreen = styled(Button)`
  background: ${colors.buttonGreen};
  border-bottom: 2px solid #28a745;
  &:hover {
    background: #28a745;
  }
`;

export const ButtonRed = styled(Button)`
  background: ${colors.buttonRed};
  border-bottom: 2px solid #af1c2a;
  &:hover {
    background: #af1c2a;
  }
`
