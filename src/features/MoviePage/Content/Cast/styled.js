import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 288px;
        margin: 0 auto;
        font-size: 20px;
        margin-top: 21px;   }
`;

export const PersonNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
`;

export const Row = styled.ul`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 24px;
    margin: 0 auto;
    padding-top: 12px;
    padding-left: 0;


    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 320px;
        gap: 16px;
        padding-left: 16px;
    }
`;