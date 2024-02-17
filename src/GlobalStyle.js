import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }
    :focus {
        outline: none;
    }

    body {
        background: ${({ theme }) => theme.color.whisper};
        font-family: "Poppins", sans-serif;
    }
`;