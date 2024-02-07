import styled from "styled-components";

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 40px;
`;

export const Row = styled.ul`
    list-style: none;
    display: flex;
    flex-basis: 16.66%;
    padding-left: 0;
    gap: 24px;
`;

export const PersonTile = styled.li`
    width: 208px;
    height: 339px;
    box-shadow: 0 4px 12px 0 rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    margin-top: 8px;
`;