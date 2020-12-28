import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "../components/templetes/MainPage";
import { MyPage } from "./MyPage";

const Container = styled.div``;
const Main = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/main">
          <MainPage />
        </Route>
        <Route path="/main/myPage">
          <MyPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default Main;
