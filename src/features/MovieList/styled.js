import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.main`
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 288px;
    }
`;

export const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 18px;
        margin-bottom: 12px;
    }
`;

export const Row = styled.span`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding-left: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 320px;
        gap: 16px;
        margin-bottom: 32px;
    }
`;

export const MovieNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
`;