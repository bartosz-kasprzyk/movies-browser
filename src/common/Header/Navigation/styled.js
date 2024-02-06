import styled from "styled-components";
import { ReactComponent as Video } from "./Video.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
	gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 100%;
	    gap: 19px;
    };
`;

export const LogoWrapper = styled(Link)`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 12px;
    align-items: center;
    width: 220px;
    text-decoration: none; 

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        grid-gap: 10px;
        width: 170px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        grid-gap: 8px;
        width: 120px;
    }
`;

export const LogoIcon = styled(Video)`
    width: 40px;
    height: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        width: 28px;
        height: 28px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 17px;
        height: 17px;
    }
`;

export const LogoText = styled.span`
    width: 168px;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: -1.5px;
    color: ${({ theme }) => theme.color.white};

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        font-size: 18px;
        letter-spacing: -1px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 13px;
        letter-spacing: -0.5px;
    }
`;

export const NavSection = styled.ul`
    display: flex;
    gap: 16px;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        gap: 14px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        gap: 12px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    float: left;
    padding: 13.5px 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        font-size: 13px;
        line-height: 19.5px;
        padding: 10.75px 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 12px;
        line-height: 18px;
        padding: 8px 12px;
    }

    &.active {
        border: 1px solid ${({ theme }) => theme.color.mystic};
        border-radius: 50px;
    }
`;