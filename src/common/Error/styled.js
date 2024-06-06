import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Danger } from "../../images/Danger.svg";

export const ErrorMessage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

export const StyledDanger = styled(Danger)`
    width: 120px;
    height: 120px;
    margin-top: 124px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 80px;
        height: 80px;
    }
`;

export const Warning = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.xl6};
    line-height: 43.2px;
    margin: auto;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: ${({ theme }) => theme.fontSize.xl5};
    }
`;

export const Recommendation = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.xl3};
    line-height: 28.6px;
    text-align: center;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
       font-size: ${({ theme }) => theme.fontSize.lg}; 
    }
`;

export const Button = styled(NavLink)`
    padding: 16px 24px 16px 24px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    border: none;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-family: "Open Sans", sans-serif;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
       font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;