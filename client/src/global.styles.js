import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    font-family: "Lexend Peta", sans-serif;
    padding: 20px 60px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`