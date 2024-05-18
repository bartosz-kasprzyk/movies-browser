import styled from "styled-components";

export const Tile = styled.article`
    min-height: 644px;
    width: 100%;
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        min-height: 360px;
        padding: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        min-height: 292px;
        padding: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        display: flex;
        flex-wrap: wrap;
        min-height: 195px;
        padding: 16px;
        gap: 16px;
    }
`;

export const PlaceholderImage = styled.img`
    width: 399px;
    height: 564px;
    margin: 0 40px 30px 0;
    float: left;
    border-radius: 5px;
    display: ${({ $loaded }) => ($loaded ? 'none' : 'block')};

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        width: 210px;
        height: 296px;
        margin: 0 32px 4px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 169px;
        height: 244px;
        margin: 0 24px 4px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 116px;
        height: 163px;
        margin: 0;
    }
`;

export const StyledImage = styled.img`
    width: 399px;
    height: 564px;
    margin: 0 40px 30px 0;
    float: left;
    border-radius: 5px;
    opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        width: 210px;
        height: 296px;
        margin: 0 32px 4px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 169px;
        height: 244px;
        margin: 0 24px 4px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 116px;
        height: 163px;
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
    margin: 8px 0 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        font-size: 25px;
        line-height: 30px;
        margin: 6px 0 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        margin: 4px 0 16px;
    }
`;

export const Birth = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 18px;
    line-height: 22px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
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
    margin-right: 8px;
    line-height: 22px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        margin-right: 5px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        margin-right: 2px;
    }
`;

export const Description = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
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