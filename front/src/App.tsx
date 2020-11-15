import React from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import HomePage from "./pages";
import Modal from "./containers/Modal";
import Main from "./pages/MainPage";
import Auth from "./containers/Auth";

const Container = styled.div``;

function App() {
  return (
    <Router basename="/rememo">
      <Container>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Auth>
            <Main />
          </Auth>
        </Switch>
        <Modal />
      </Container>
    </Router>
  );
}

export default App;
