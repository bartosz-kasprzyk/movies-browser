import styled from "styled-components";

export const Wrapper = styled.main`
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 288px;
    }
`;

export const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 18px;
        margin-bottom: 12px;
    }
`;

export const Content = styled.span`
    display: grid;
    grid-template-columns: repeat(auto-fill, 324px);
    justify-content: center;
    gap: 24px;
    margin-bottom: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(auto-fill, 320px);
        gap: 16px;
        margin: 0 -16px 32px;
    }
`;