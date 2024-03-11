import styled from "styled-components";

export const BlackBar = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.color.black};
    margin-top: -56px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-top: -40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin-top: -24px;
    }
`;

export const Wrapper = styled.div`
    max-width: 1368px;
    position: relative;
    display: flex;
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        max-width: 980px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        max-width: 780px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        width: 100%;
    }
`;

export const Poster = styled.img`
    max-width: 1368px;
    height: 770px;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        max-width: 980px;
        height: 560px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        max-width: 780px;
        height: 460px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        width: 100%;
        height: auto;
    }
`;

export const Plexa = styled.img`
    max-width: 1368px;
    height: 770px;
    position: absolute;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        max-width: 980px;
        height: 560px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        max-width: 780px;
        height: 460px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        width: 100%;
        height: auto;
    }
`;

export const MainInfo = styled.div`
    color: ${({ theme }) => theme.color.white};
	bottom: 0;
	left: 0;
    position: absolute;
    padding-bottom: 56px; 

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding-bottom: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        padding-left: 24px; 
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        padding-bottom: 8px;
        padding-left: 16px;
    }
`;

export const MainTitle = styled.div`
        font-weight: 600;
        font-size: 64px;
        padding-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
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

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
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

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
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

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 24px;
        height: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 16px;
        height: 16px;
        margin-top: -3px;
    }
`;

export const Text = styled.div`
    font-size: 30px;
    font-weight: 500;
    line-height: 50px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 14px;
        line-height: 0.8;
    }
`;

export const Ten = styled.span`
    font-size: 16px;
    margin-right: 5px;
    margin-top: 19px;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        margin-right: 20px;
        margin-top: 19px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 13px;
        margin-right: 20px;
        margin-top: 10px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 10px;
        margin-top: 1px;
        margin-left: -2px;
    }
`;

export const Votes = styled.span`
    font-size: 16px;
    margin: 10px 12px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 14px;
        margin: 9px 0 0 -6px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 10px;
        margin: 1px 0 0 -10px;
    }
`;