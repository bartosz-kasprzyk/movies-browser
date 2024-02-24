import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.main`
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 288px;
    }
`;

export const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 18px;
        margin: 0 0 12px 16px;
    }
`;

export const Content = styled.span`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: center;
    gap: 24px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding-left: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.notebook}) {
        grid-template-columns: repeat(3, auto);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        grid-template-columns: repeat(2, auto);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phoneTwo}) {
        grid-template-columns: repeat(1, auto);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        grid-template-columns: repeat(1, auto);
        width: 320px;
        gap: 16px;
        margin-bottom: 32px;
    }
`;

export const MovieNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
`;