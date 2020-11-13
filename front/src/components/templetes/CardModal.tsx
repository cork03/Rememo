import React,{useCallback,useState}  from "react";
import styled from "styled-components";
import Input  from "../atoms/Input";
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
  margin: 10px auto;
`;
const TitleArea = styled.div``

const BodyArea = styled.div`
  margin-top: 30px;
`
const BodyTitle = styled.h2``

const LinksArea = styled.div``
const LinksTitle = styled.h2``

export const CardModal = ({card,hideModal}: any) => {
  const [title,setTitle] = useState(card.title)
  const [body,setBody] = useState(card.body)
  const [links,setLinks] = useState(card.links)
  const closeCard = useCallback(() => {
    hideModal()
  },[hideModal])
  return (
    <Container>
      <CloseButton onClick={closeCard}>✖️</CloseButton>
      <Width>
        <TitleArea>
          <Input type='card' value={title} onChangeText={setTitle} />
        </TitleArea>
        <BodyArea>
          <BodyTitle>説明</BodyTitle>
          <TextArea value={body} onChangeText={setBody} />
        </BodyArea>
        <LinksArea>
          <LinksTitle>参考サイト</LinksTitle>
          {links ? (links.map((item: any) => {
            return(<Input type='card' value={item}/>)
          })): (<></>)}
          <Input type='card' placeholder='リンクを追加する' />
        </LinksArea>
      </Width>
    </Container>
    )
}
