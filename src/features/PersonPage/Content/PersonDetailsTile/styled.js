import styled from "styled-components";

export const Tile = styled.article`
    min-height: 644px;
    width: 1368px;
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    justify-content: center;
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        width: 1016px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 668px;
        min-height: 422px;
        padding: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 100%;
        min-height: 272px;
        padding: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        display: flex;
        flex-wrap: wrap;
        padding: 16px;
        gap: 16px;
    }
`;

export const Image = styled.img`
    width: 399px;
    height: 564px;
    margin: 0 40px 40px 0;
    float: left;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 210px;
        height: 296px;
        margin: 0 32px 4px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 169px;
        height: 224px;
        margin: 0 24px 4px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        flex-basis: 114px;
        height: 169px;
        margin: 0;
    }
`;

export const PersonalData = styled.div`
    flex: 1;
`;

export const Name = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 8px 0 24px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 25px;
        line-height: 30px;
        margin: 6px 0 20px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        margin: 4px 0 16px 0;
    }
`;

export const Birth = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 18px;
    line-height: 22px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 15px;
        gap: 2px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 12px;
        line-height: 14px;
    }
`;

export const Info = styled.span`
    color: ${({ theme }) => theme.color.stormGrey};
    margin-right: 11px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-right: 8px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        margin-right: 4px;
    }
`;

export const Description = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 17px;
        line-height: 27px;
        margin-top: 12;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 14px;
        line-height: 22px;
        margin-top: 0;
    }
`;