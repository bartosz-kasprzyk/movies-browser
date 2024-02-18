import styled from "styled-components";

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
    background: ${({ theme }) => theme.color.white};
    width: 208px;
    height: 339px;
    list-style: none;
    box-shadow: 0 4px 12px 0 rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding-left: 0;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 136px;
        height: 245px;
        margin-top: 0;
    }
`;