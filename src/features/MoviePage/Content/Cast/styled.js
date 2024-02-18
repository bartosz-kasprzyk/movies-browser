import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.section`
    margin-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 320px;
        margin: 21px auto;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 18px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 20px;
        margin-bottom: -8px;
        padding-left: 16px;
    }
`;

export const PersonNavLink = styled(NavLink)`
    text-decoration: none;
`;

export const Picture = styled.img`
    width: 176px;
    height: 231px;
    border-radius: 5px;
    margin: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 120px;
        height: 178px;
        margin: 8px;
    }
`;

export const Text = styled.div`
    font-size: 22px;
    font-weight: 500;
    margin-top: -4px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 14px;
        margin-top: -2px;
    }
`;

export const Role = styled.span`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 18px;
    line-height: 44px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        line-height: 34px;
    }
`;