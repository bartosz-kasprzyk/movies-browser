import styled from "styled-components";

export const Heading = styled.header`
    font-size: 36px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 20px;
    }
`;

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding-top: 24px;
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        gap: 16px;
    }
`;