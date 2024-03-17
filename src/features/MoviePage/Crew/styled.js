import styled from "styled-components";

export const Title = styled.header`
    font-size: 36px;
    font-weight: 600;
    margin-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 28px;
        margin-top: 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 20px;
        margin-top: 21px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 208px);
    grid-gap: 24px;
    padding-top: 24px;
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