import styled, { css } from "styled-components";

const BlackBar = styled.section`
    background: ${({ theme }) => theme.color.black};
    width: 100%;
    margin-top: -56px;

    ${({ loading }) => loading && css`
        height: 774px;
    `}
`;

export const BlackBarWrapper = styled(({ dynamicHeight, ...rest }) => <BlackBar {...rest} />)`
    ${({ dynamicHeight }) => dynamicHeight && css`
        @media(max-width: 1536px) {
            height: ${dynamicHeight}px;
        }
    `}
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

const Backdrop = styled.div`
    transition: opacity 1s ease;
`;

export const BackdropWrapper = styled(({ loaded, ...rest }) => <Backdrop {...rest} />)`
    opacity: ${({ loaded }) => (loaded ? 1 : 0)};
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

export const MainTitle = styled.h1`
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        font-size: ${({ theme }) => theme.fontSize.xl8};
        padding-bottom: 24px;
        margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.xl7};
        padding-bottom: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        font-size: ${({ theme }) => theme.fontSize.xl6};
        padding-bottom: 8px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xl4};
    }
`;

export const Opinion = styled.div`
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
    font-size: ${({ theme }) => theme.fontSize.xl5};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 50px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.xl2};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        line-height: 30px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.md};
        line-height: 0.8;
    }
`;

export const Ten = styled.span`
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin-right: 35px;
    margin-top: 19px;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        margin-right: 20px;
        margin-top: 19px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.sm};
        margin-right: 20px;
        margin-top: 10px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xs};
        margin-top: 1px;
        margin-left: -2px;
    }
`;

export const Votes = styled.span`
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin: 10px 12px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.md};
        margin: 9px 0 0 -6px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xs};
        margin: 1px 0 0 -10px;
    }
`;