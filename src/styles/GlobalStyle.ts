import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
   --primary-color: #EAEAEA
   --secondary-color: #080808
}

body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    width: 100vw;
    height: 100vh;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
`