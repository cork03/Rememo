import React,{useEffect} from "react";
import styled from "styled-components";
import { Card } from "./Card";

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
  padding: 5px;
`
const ListTitle = styled.p`
`
const Cards = styled.ul`

`

export const MainBody = ({fetchCards,data,showModal,hideModal} :any) => {
  useEffect(() => {
    fetchCards()
  },[fetchCards])
  const cards = Object.values(data)
  return (
     <Container>
      <Width>
      <ListsField>
        <ListTitle>今日の学習</ListTitle>
        <Cards>
          {cards.map((card: any) => {
            return <Card card={card} showModal={showModal} hideModal={hideModal} />
          })}
        </Cards>
      </ListsField>
      <ListsField></ListsField>
      </Width>
    </Container>
    )
}
