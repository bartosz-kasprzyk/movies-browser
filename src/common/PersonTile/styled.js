import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(NavLink)`
    width: 208px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 12px 0 rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 136px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 12px;
    padding: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-gap: 8px;
        padding: 8px;
    }
`;

export const StyledImage = styled.img`
    width: 176px;
    height: 231px;
    object-fit: cover;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 120px;
        height: 178px;
    }
`;

export const Description = styled.div`
    text-align: center;
    word-break: break-word;
`;

export const StyledTitle = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 29px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 14px;
        line-height: 18px;
    }
`;

export const StyledSubtitle = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        line-height: 25px;
    }
`;