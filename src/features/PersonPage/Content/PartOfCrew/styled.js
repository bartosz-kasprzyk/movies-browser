import styled from "styled-components";

export const Grid = styled.span`
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
        grid-template-columns: repeat(2, auto);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phoneTwo}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 16px;
    }
`;


export const Title = styled.span`
    grid-column: 1 / -1;
    font-weight: 600;
    font-size: 36px;
    margin-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 28px;
        margin-top: 21px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 18px;
    }
`;