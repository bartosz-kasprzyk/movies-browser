import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        line-height: 32px;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.color.whisper};
    }
`;