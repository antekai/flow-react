import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: monospace, sans-serif;
  }
  .react-flow__node{
    width:fit-content;
  }

`;

const theme = {
  colors: {
    schoolbusYellow: "#FFD800",
    silver: "#CCCCCC",
  },
};

export default theme;
