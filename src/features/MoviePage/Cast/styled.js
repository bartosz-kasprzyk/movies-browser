import styled from "styled-components";

export const Title = styled.header`
    grid-column: 1 / -1;
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 28px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 18px;
    }
`;

export const Grid = styled.span`
    width: 1368px;
    display: grid;
    grid-template-columns: repeat(6, 208px);
    gap: 24px;
    justify-content: center;
    padding-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        width: auto;
        grid-template-columns: repeat(5, 208px);
        grid-gap: 22px;
        padding-top: 57px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(4, 208px);
        grid-gap: 20px;
        padding-top: 50px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        grid-template-columns: repeat(3, 208px);
        grid-gap: 18px;
        padding-top: 43px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(4, 136px);
        grid-gap: 36px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phoneTwo}) {
        grid-template-columns: repeat(3, 136px);
        grid-gap: 16px;
        padding-top: 29px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        grid-template-columns: repeat(2, 136px);
        grid-gap: 16px;
        padding-top: 21px;
    }
`;