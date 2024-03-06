import styled from "styled-components";

export const Wrapper = styled.article`
    width: 1368px;
    justify-content: center;
    margin: auto;
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        width: 1016px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 898px;
        padding: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        width: 660px;
        padding: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 100%;
        padding: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        padding: 16px;
        gap: 16px;
    }
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 176px;
        height: 260px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 114px;
        height: 169px;
    }
`;

export const Content = styled.div`
    
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-top: 12px;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-weight: 500;
        font-size: 26px;
        margin-top: 6px;
        margin-bottom: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 16px;
        margin-top: 2px;
        margin-bottom: 8px;
    }
`;

export const Year = styled.div`
    font-size: 22px;
    margin-bottom: 24px;    
    
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        color: ${({ theme }) => theme.color.waterloo};
        font-size: 18px;
        margin-bottom: 8px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 13px;
    }
`;

export const Production = styled.div`
    font-size: 18px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 14px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 12px;
        line-height: 20px;
    }
`;

export const Info = styled.span`
    color: ${({ theme }) => theme.color.stormGrey};
    margin: 0 11px 6px 0;
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        display: none;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 8px -8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        margin: 2px -8px 16px;
    }
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    padding: 8px 16px;
    margin: 8px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 12px;
        padding: 6px 12px;
        margin: 6px 0 6px 8px;
    }
        
    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 10px;
        padding: 4px 8px;
        margin: 4px 0 4px 8px;
    }
`;

export const Opinion = styled.span`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 8px -8px 12px;
`;

export const Rating = styled.div`
    display: flex;
    gap: 8px;
    width: 64px;
    height: 29px;
    margin: 9px 8px 3px 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        flex-wrap: wrap;
        gap: 8px;
        margin: -12.4px 8px -4px;
    }
`;

export const Vector = styled.img`
    margin: 2.5px 0 2.5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 20px;
        height: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 16px;
        height: 16px;
    }
`;

export const Text = styled.span`
    font-size: 22px;
    font-weight: 500;
    line-height: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 13px;
        line-height: 24.6px;
    }
`;

export const Ten = styled.span`
    font-size: 14px;
    line-height: 37px;
    margin: 9px 12px 3px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 12px;
        line-height: 32px;
        margin-left: -14px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        display: none;
    }
`;

export const Votes = styled.span`
    font-size: 14px;
    line-height: 37px;
    margin: 9px 12px 3px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        color: ${({ theme }) => theme.color.waterloo};  
        font-size: 13px;
        line-height: 32px;
        margin-left: -4px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        color: ${({ theme }) => theme.color.waterloo};
        line-height: 0;
        margin: 0 -2px 0 -22px;
    }
`;

export const Description = styled.div`
    font-size: 20px;
    line-height: 1.6;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 17px;
        margin-top: 40px;
        margin-left: -205px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 14px;
        margin-top: 30px;
        margin-left: -130px;
    }
`;