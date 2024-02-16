import styled from "styled-components";
import background from "../images/Poster big.png";
import plexa from "../images/Pleksa.png";

export const Wrapper = styled.main`
    background-image: url("${plexa}"), url("${background}");
    background-position: center;
    width: 1920px;
    height: 770px;
    margin: 0 0 64px -276px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        background-size: cover, contain;
        width: 320px;
        height: 148px;
        margin: auto;
        margin-bottom: 16px;
    }
`;

export const MainInfo = styled.div`
    color: ${({ theme }) => theme.color.white};
    padding: 528px 276px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding: 88px 16px;
        line-height: 24px;
    }
`;

export const MainTitle = styled.div`
        font-weight: 600;
        font-size: 64px;
        padding-bottom: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 24px;
    }
`;

export const Opinion = styled.span` 
    display: grid;
    grid-template-columns: 1fr 13fr;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: 15% 13% auto;
    }
`;

export const Rating = styled.div`
    display: flex;
    gap: 8px;
    width: 91px;
    height: 40px;
    margin-right: 7px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        gap: 4px;
    }
`;

export const Vector = styled.img`
    width: 40px;
    height: 40px;
    margin: 2.5px 0 2.5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 16px;
        height: 16px;
        margin-top: -9px;
    }
`;

export const Text = styled.div`
    font-size: 30px;
    font-weight: 500;
    line-height: 50px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 14px;
        font-weight: 600;
        line-height: 0;
    }
`;

export const Ten = styled.span`
    font-size: 16px;
    margin: 19px 12px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 10px;
        font-weight: 400;
        margin-top: -10.5px;
    }
`;

export const Votes = styled.span`
    font-size: 16px;
    margin: 14px 12px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 10px;
        font-weight: 400;
        margin: -10.5px 0 0 -12px;
    }
`;