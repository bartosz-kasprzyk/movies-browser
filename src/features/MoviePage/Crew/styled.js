import styled from "styled-components";

export const Title = styled.header`
    width: 1368px;
    font-weight: 600;
    font-size: 36px;
    margin: 64px auto 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        width: 1128px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 892px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        width: 678px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 592px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phoneTwo}) {
        width: 440px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 20px;
        margin-top: 21px;   
        }
`;

export const Grid = styled.span`
    width: 1368px;
    display: grid;
    grid-template-columns: repeat(6, 208px);
    gap: 24px;
    justify-content: center;
    padding-top: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        width: auto;
        grid-template-columns: repeat(5, 208px);
        grid-gap: 22px;
        padding-top: 22px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(4, 208px);
        grid-gap: 20px;
        padding-top: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        grid-template-columns: repeat(3, 208px);
        grid-gap: 18px;
        padding-top: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(4, 136px);
        grid-gap: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phoneTwo}) {
        grid-template-columns: repeat(3, 136px);
        grid-gap: 16px;
        padding-top: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        grid-template-columns: repeat(2, 136px);
        grid-gap: 16px;
        padding-top: 12px;
    }
`;