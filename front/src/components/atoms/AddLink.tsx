import React, { useCallback } from "react";
import styled from "styled-components";
import {colors} from '../../styles/Variables'

const Form = styled.form``
const CardInput =styled.input`
  border: none;
  background: ${colors.modalBackground};
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 20px;
  border-radius: 6px;
  :focus {
      border: 1px solid ${colors.border};
  }
  :hover {
      background: ${colors.modalHover};
  }
`;

export const AddLink = ({value,onChangeText,placeholder,changeLink,link }: any) => {
    const onChange = useCallback((e: any) => {
        onChangeText(e.target.value);
    },[onChangeText]);
    const add = useCallback((e) => {
        if(e.keyCode === 13){
            changeLink([...link,value])
        }
    },[changeLink,link,value])
    return (
        <Form>
            <CardInput value={value}  onChange={onChange} placeholder={placeholder} onKeyDown={add}/>
        </Form>

    );
};


