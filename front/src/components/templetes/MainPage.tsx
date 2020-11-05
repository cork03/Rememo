import React from "react";
import styled from "styled-components";
import { MainHeader } from '../organisms/MainHeader'
import { MainBody } from '../organisms/MainBody'

const Container = styled.div``



export const MainPage = ({showModal,hideModal,fetchCards,data}: any) => {
  return (
    <Container>
      <MainHeader />
      <MainBody fetchCards={ fetchCards } data={data} showModal={showModal} hideModal={hideModal} />
    </Container>
  )
}
