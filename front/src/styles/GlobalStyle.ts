import { createGlobalStyle } from "styled-components";
import { colors } from "./Variables";

export const GlobalStyle = createGlobalStyle`
  html{
  font-family: Lato, "Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif;
    line-height: 1.5;
    font-size: 14px;
    color: ${colors.baseColor};
    background: ${colors.baseBackground};
  }
body{
      margin: 0;
      padding: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  h1 {
    font-size: 2rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
  ul, p, h2, h3 {
    font-weight: 400;
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  .ReactModal__Content {
    background: ${colors.modalBackground};
    border-radius: 10px;
    margin: 50px auto;
    border: 1px solid lightgray;
    max-width: 700px;
    outline: none;
    overflow: hidden;
    bottom: auto !important;
    top: 200px !important;
    @media (max-width: 576px) {
      width: 100%;
      right: 0 !important;
      left: 0 !important;
    }
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
  .ReactModal__Overlay--after-open{
    opacity: 1;

  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  .toast-success {
    background: ${colors.baseBlue};
    color: white;
  }
  .toast-error {
    background: ${colors.baseOrange};
    color: white;
  }
  .toast-check {
    background: ${colors.checkToastBackfround};
    color: ${colors.baseColor};
  }
`;
