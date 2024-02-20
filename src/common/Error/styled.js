import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Danger } from "../../images/Danger.svg";

export const StyledDanger = styled(Danger)`
    width: 120px;
    height: 120px;
    margin-top: 180px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 80px;
        height: 80px;
    }
`;

export const ErrorMasege = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

export const Warning = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 43.2px;
    margin: auto;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 26px;
    }
`;

export const Recomendation = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 28.6px;
    text-align: center;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
       font-size: 15px; 
    }
`;

export const Button = styled(NavLink)`
    padding: 16px 24px 16px 24px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    border: none;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
       font-size: 10px;
    }
`;