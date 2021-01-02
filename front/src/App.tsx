import React from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/GlobalStyle";

import Modal from "./containers/Modal";
import Auth from "./containers/Auth";

const Container = styled.div``;
function App() {
  return (
    <Router basename="/rememo">
      <Container>
        <GlobalStyle />
        <Auth />
        <Modal />
        <ToastContainer />
      </Container>
    </Router>
  );
}

export default App;
