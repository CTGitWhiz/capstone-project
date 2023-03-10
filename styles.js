import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family:  'Open Sans', sans-serif;
    min-height: 100vh;
    background: linear-gradient(to bottom, #ffffff, #000000);
  }
`;
