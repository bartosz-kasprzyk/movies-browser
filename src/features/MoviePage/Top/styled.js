import styled from "styled-components";
import background from "../../../images/poster big.png";
import plexa from "../../../images/pleksa.png";

export const Wrapper = styled.main`
    width: 100%;
    max-width: auto;
    background-color: ${({ theme }) => theme.color.black};
`;

export const Poster = styled.span`
    background-image: url("${plexa}"), url("${background}");
    background-position: center;
    max-width: 1920px;
    height: 770px;
    margin: 0 auto;
    display: flex;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        background-size: contain;
        max-width: 798px;
        height: 246px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        background-size: contain;
        max-width: 480px;
        height: 148px;
    }
`;

export const MainInfo = styled.div`
    color: ${({ theme }) => theme.color.white};
    padding: 56px 160px;
    align-self: flex-end;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding: 0 0 0 160px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        padding: 8px 96px;
    }
`;

export const MainTitle = styled.div`
        font-weight: 600;
        font-size: 64px;
        padding-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 36px;
        padding-bottom: 4px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 24px;
    }
`;

export const Opinion = styled.section`
    width: 200px;
    height: 75px;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        height: 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        height: 18px;
    }
`;

export const Rating = styled.div`
    display: flex;
    gap: 8px;
    margin-right: 7px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        gap: 6px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        gap: 4px;
    }
`;

export const Vector = styled.img`
    width: 40px;
    height: 40px;
    margin: 2.5px 0 2.5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 24px;
        height: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
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
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 14px;
        line-height: 0;
    }
`;

export const Ten = styled.span`
    font-size: 16px;
    margin-top: 21px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        margin: 10px 20px 0 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 10px;
        margin: -4px 20px 0 -4px;
    }
`;

export const Votes = styled.span`
    font-size: 16px;
    margin: 10px 12px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 14px;
        margin-left: -6px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 10px;
        margin: -4px 0 0 -12px;
    }
`;