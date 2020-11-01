import React, { useCallback } from "react";
import styled from "styled-components";
import {colors} from '../../styles/Variables'

const Input =styled.input`
  border-radius: 6px;
  border: 1px solid ${colors.border};
  display: block;
  width: 100%;
  padding: 8px;
`;

export const TextInput = ({value,onChangeText,placeholder }: any) => {
    const onChange = useCallback((e: any) => {
        onChangeText(e.target.value);
    },[onChangeText]);
    return (
      <>
        <Input
          type="input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></Input>
      </>
    );
};

