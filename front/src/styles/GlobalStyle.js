import { createGlobalStyle } from "styled-components";
import { colors } from "./Variables";

export const GlobalStyle = createGlobalStyle`
  html{
    font-family: Lato, "Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif;
    line-height: 1.5;
    font-size: 14px;
    color: ${colors.baseColor} }
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
  ul, p,h2 {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color: ${colors.baseColor}
  }
  .ReactModal__Content {
    background: white;
    border: 1px solid lightgray;
    margin: 16px auto;
    padding: 16px;
    width: 60%;
    outline: none;
    bottom: auto !important;
    top: 15% !important;
    @media (max-width: 576px) {
      width: 100%;
      right: 0 !important;
      left: 0 !important;
    }
  }
`;
