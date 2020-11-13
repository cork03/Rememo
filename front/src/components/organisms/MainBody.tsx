import React,{useCallback, useEffect} from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";
import { Card } from "./Card";
import Button  from '../atoms/Buttons'
import { CreateCardModal } from "../templetes/CreateCardModal";

const Container = styled.div`
  height: 100vh;
`
const Width = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  padding-top: 50px;
`

const ListsField = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 6px;
  margin-right: 30px;
  padding: 10px;
  background: ${colors.cardBackground};
`
const ListTitle = styled.p`
  font-size: 20px;
`
const Cards = styled.ul`
`

export const MainBody = ({fetchCards,data,showModal,hideModal,postCard} :any) => {
  useEffect(() => {
    fetchCards()
  },[fetchCards])
  const cards = Object.values(data)
  const _showModal= useCallback(() => {
    showModal({component: <CreateCardModal hideModal={hideModal} postCard={postCard}/>})
  },[showModal,hideModal,postCard])
  console.log(cards)
  return (
     <Container>
      <Width>
      <ListsField>
        <ListTitle>今日の学習</ListTitle>
        <Cards>
          {cards.map((card: any) => {
            return <Card card={card} showModal={showModal} hideModal={hideModal} />
          })}
          <Button type='card' onClick={_showModal}>カードを追加する</Button>
        </Cards>
      </ListsField>
      <ListsField></ListsField>
      </Width>
    </Container>
    )
}
