import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  a {
    color: ${() => theme.primaryColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;