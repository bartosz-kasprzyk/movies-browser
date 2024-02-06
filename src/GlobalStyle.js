import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
  }
  
  *,
  ::after ::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    background: ${({ theme }) => theme.color.whisper};
    padding: 16px;
    color: ${({ theme }) => theme.color.black};
  }
`;