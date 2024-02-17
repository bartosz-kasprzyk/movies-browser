import styled from "styled-components";

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding: 16px;
        margin: auto;
        gap: 16px;
        width: 288px;
        height: 400px;
    }
`;

export const Row = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding-left: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        gap: 16px;
        padding-left: 16px;
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