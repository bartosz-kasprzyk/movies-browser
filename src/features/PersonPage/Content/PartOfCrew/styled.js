import styled from "styled-components";

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin: 64px auto 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        width: 1016px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 668px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 100%;
        margin: 0 auto;
        font-size: 20px;
        margin-top: 21px;   }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 24px;
    padding-top: 24px;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        grid-template-columns: repeat(3, auto);
        grid-gap: 22px;
        padding-top: 22px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(2, auto);
        grid-gap: 20px;
        padding-top: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 16px;
        padding-top: 12px;
    }
`;