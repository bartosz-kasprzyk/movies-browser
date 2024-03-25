import styled from "styled-components";

export const BlackBar = styled.div`
    background: ${({ theme }) => theme.color.black};
    width: 100%;
    margin-top: -56px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-top: -40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin-top: -24px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 90%;
    max-width: 1368px;
    margin: 56px auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        margin: 40px auto;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        margin: 24px auto;
    }
`;

export const Plexa = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Poster = styled.img`
    width: 100%;
    max-width: 1368px;
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

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding-bottom: 12px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        padding-bottom: 8px;
    }
`;

export const MainTitle = styled.div`
        font-weight: 600;
        font-size: 64px;
        padding-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 48px;
        padding-bottom: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        font-size: 36px;
        padding-bottom: 8px;
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
    margin-right: 35px;
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