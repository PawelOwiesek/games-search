import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after,
 ::before {
  box-sizing: inherit;
}

body {
    max-width:1400px;
    margin:0 auto;
    background-color: ${({ theme }) => theme.color.whisper};
    font-family: "Roboto", sans-serif;
    word-break: break-word;
    overflow-y: scroll;
}
`;
