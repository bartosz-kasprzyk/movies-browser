import styled from "styled-components";

export const MainTitle = styled.h1`
    grid-column: 1 / -1;
    font-weight: 600;
    font-size: 36px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 28px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 18px;
    }
`;

export const Content = styled.main`
    width: 1368px;
    display: grid;
    grid-template-columns: repeat(4, 324px);
    justify-content: center;
    grid-gap: 24px;
    margin-bottom: 40px;
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        grid-template-columns: repeat(4, minmax(200px, 1fr));
        width: 100%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletOne}) {
        grid-template-columns: repeat(3, minmax(200px, 1fr));
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phoneTwo}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 16px;
    }
`;

export const Grid = styled.main`
    display: grid;
    grid-template-columns: repeat(6, minmax(100px, 1fr));
    grid-gap: 24px;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(5, minmax(100px, 1fr));
        width: 100%;
        grid-gap: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        grid-template-columns: repeat(4, minmax(100px, 1fr));
        grid-gap: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(3, minmax(100px, 1fr));
        padding-top: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        padding-top: 12px;
    }
`;