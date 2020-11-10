import React,{useCallback,useState}  from "react";
import styled from "styled-components";
import { TextInput } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";


const Container =styled.div`
  position: relative;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  cursor: pointer;
`
const Width =styled.div`
  margin: 30px auto;
  width: 70%;
`;
const TitleArea = styled.div``
const Title = styled.h2``

const BodyArea = styled.div``
const BodyTitle = styled.h2``


export const CardModal = ({card,hideModal}: any) => {
  const [title,setTitle] = useState(card.title)
  const [body,setBody] = useState(card.body)
  const closeCard = useCallback(() => {
    hideModal()
  },[hideModal])
  return (
    <Container>
      <CloseButton onClick={closeCard}>✖️</CloseButton>
      <Width>
        <TitleArea>
          <Title>Title</Title>
          <TextInput value={title} onChangeText={setTitle} />
        </TitleArea>
        <BodyArea>
          <BodyTitle>Text</BodyTitle>
          <TextArea value={body} onChangeText={setBody} />
        </BodyArea>
      </Width>
    </Container>
    )
}
