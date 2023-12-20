import { createGlobalStyle } from "styled-components";
import { BLACK, GRAY, MAIN } from "./ColorStyles";

const GlobalStyles = createGlobalStyle`
  :root {
    ${BLACK};
    ${GRAY};
    ${MAIN};
  }

  * {
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  html {
    font-size: 62.5%;
    background-color: var(--Gray50);
    word-break: keep-all;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p,
    a, dl, dt, dd, ol, ul, li, form, label, table {
      margin: 0; 
      padding: 0;
      border: 0;
      vertical-align: baseline;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  ol, ul{
    list-style: none;
  }

  button {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

`;

export default GlobalStyles;
