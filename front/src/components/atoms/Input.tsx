import React, { useCallback } from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";

const Input = styled.input`
  border-radius: 6px;
  border: 1px solid ${colors.border};
  display: block;
  width: 100%;
  padding: 8px;
`;

const CardInput = styled.input`
  border: none;
  background: ${colors.modalBackground};
  display: block;
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  :focus {
    border: 1px solid ${colors.border};
  }
  :hover {
    background: ${colors.modalHover};
  }
`;

const map: any = {
  default: Input,
  card: CardInput,
};

export const TextInput = ({ value, onChangeText, placeholder }: any) => {
  const onChange = useCallback(
    (e: any) => {
      onChangeText(e.target.value);
    },
    [onChangeText]
  );
  return (
    <>
      <Input
        type="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

const InputComponent = ({
  type,
  value,
  onChangeText,
  placeholder,
  children,
}: any) => {
  const onChange = useCallback(
    (e: any) => {
      onChangeText(e.target.value);
    },
    [onChangeText]
  );
  const component = map[type] || map.default;
  return React.createElement(
    component,
    { placeholder, value, onChange },
    children
  );
};

export default InputComponent;
