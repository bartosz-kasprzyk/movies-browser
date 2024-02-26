import styled from "styled-components";

export const Heading = styled.header`
    font-size: 36px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 28px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 20px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 24px;
    padding-top: 24px;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        grid-template-columns: repeat(5, auto);
        grid-gap: 22px;
        padding-top: 22px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(4, auto);
        grid-gap: 20px;
        padding-top: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        grid-template-columns: repeat(3, auto);
        grid-gap: 18px;
        padding-top: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(3, auto);
        grid-gap: 16px;
        padding-top: 12px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        grid-template-columns: repeat(2, auto);
        grid-gap: 16px;
        padding-top: 12px;
    }
`;