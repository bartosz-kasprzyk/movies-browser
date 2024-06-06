import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PersonNavLink = styled(NavLink)`
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    transition: transform ease 300ms;
    text-decoration: none;
    position: relative;
    width: 100%;
    box-shadow: 0 4px 12px 0 rgba(186, 199, 213, 0.5);

    &:hover {
        transform: translate(0, -10px);
    }

    &:hover {
        transform: translate(0, -10px);
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 12px;
    padding: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        grid-gap: 8px;
        padding: 8px;
    }
`;

export const PlaceholderImage = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    display: ${({ $loaded }) => ($loaded ? 'none' : 'block')};
`;

export const StyledImage = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
`;

export const Description = styled.div`
    text-align: center;
    word-break: break-word;
`;

export const StyledTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl3};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 29px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.xl};
        line-height: 23px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.md};
        line-height: 18px;
    }
`;

export const StyledSubtitle = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 29px;
    margin-top: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.lg};
        line-height: 23px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 18px;
        margin-top: 3px;
    }
`;