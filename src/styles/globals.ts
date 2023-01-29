// @import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");
// @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");

import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #fff;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyle;

