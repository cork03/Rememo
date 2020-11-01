import React from "react";
import styled from "styled-components";
import {Header} from "../organisms/Header";
import {MainBody} from '../organisms/MainBody'

const Container = styled.div``



export const HomePage = ({showModal,hideModal}: any) => {

  return (
    <Container>
      <Header show={showModal} hide={hideModal}/>
      <MainBody/>
    </Container>
  )
}
