import styled from "styled-components";

export const Row = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding-left: 0;
    margin-bottom: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        gap: 16px;
    }
`;

export const PersonTile = styled.ul`
    list-style: none;
    padding-left: 0;
    box-shadow: 0 4px 12px 0 rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    margin-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin-top: 0;
    }
`;