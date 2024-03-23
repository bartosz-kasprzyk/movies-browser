import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 208px);
    grid-gap: 24px;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(auto-fill, 136px);
        grid-gap: 16px;
        padding-top: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        padding-top: 12px;
    }
`;

export const Heading = styled.header`
    font-size: 36px;
    font-weight: 600;
    grid-column: 1 / -1;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        font-size: 28px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 20px;
    }
`;