import { createGlobalStyle } from "styled-components";
import { colors, font } from "./Variables";

export const GlobalStyle = createGlobalStyle`
  html{
  font-family: ${font.base}, Lato, "Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif;
    line-height: 1.5;
    font-size: 14px;
    color: ${colors.colorBlack};
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
    padding: 0;
    margin: 0;
  }
  ul, p, h2, h3 {
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
    margin: 100px auto;
    padding: 16px;
    border: 1px solid lightgray;
    max-width: 600px;
    outline: none;
    bottom: auto !important;
    top: 200px !important;
    @media (max-width: 576px) {
      width: 100%;
      right: 0 !important;
      left: 0 !important;
    }
  }
`;
