import React, { useCallback } from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";

const Input = styled.textarea`
  border-radius: 6px;
  border: 1px solid ${colors.border};
  display: block;
  width: 100%;
  padding: 8px;
`;

export const TextArea = ({ value, onChangeText, placeholder }: any) => {
  const onChange = useCallback(
    (e: any) => {
      onChangeText(e.target.value);
    },
    [onChangeText]
  );
  return (
    <>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};
