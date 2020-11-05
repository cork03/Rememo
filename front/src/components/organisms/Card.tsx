import React, { useCallback } from "react";
import styled from "styled-components";
import { CardModal } from "../templetes/CardModal";

const Content = styled.li`
  background-color: white;
  margin-bottom: 5px;
  padding: 3px 0;
`

export const Card = ({card,showModal,hideModal}: any) => {
    const showCard = useCallback(() => {
        showModal({component: <CardModal card={card} hideModal={hideModal}/>})
    },[showModal,card,hideModal])
    return <Content onClick= {showCard}>{card.title}</Content>
}
