import styled from "styled-components";

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin-left: 24px;
        font-size: 24px;
        margin: 40px 0 0 120px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 288px;
        margin: 0 auto;
        font-size: 20px;
        margin-top: 21px;
    }
`;

export const Grid = styled.span`
    display: grid;
    grid-template-columns: repeat(6, auto);
    gap: 24px;
    justify-content: center;
    padding-top: 32px;

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
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        grid-template-columns: repeat(2, auto);
        grid-gap: 16px;
        padding-top: 12px;
    }
`;