import styled from "styled-components";

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 18px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 0;
    }
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 114px;
        height: 169px;
    }
`;

export const Content = styled.div`
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 114px;
        height: 169px;
    }
`;

export const Year = styled.div`
    font-size: 22px;
    margin-bottom: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        color: ${({ theme }) => theme.color.waterloo};
        font-size: 13px;
        margin-bottom: 4px;
    }
`;

export const Production = styled.div`
    font-size: 18px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 12px;
    }
`;

export const Info = styled.span`
    color: ${({ theme }) => theme.color.stormGrey};
    margin: 0 11px 6px 0;
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        display: none;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 8px -8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
    }
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    padding: 6px 16px;
    margin: 10px 8px;
    border-radius: 5px;
        
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        display: flex;
        font-size: 10px;
        padding: 3px 8px;
        margin: 4px 0 4px 8px;
    }
`;

export const TagMiddle = styled.span`
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        order: 1;
    }
`;

export const Opinion = styled.span`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 8px -8px;
`;

export const Rating = styled.div`
    display: flex;
    gap: 8px;
    width: 64px;
    height: 29px;
    margin: 9px 8px 3px 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        flex-wrap: wrap;
        flex-basis: 33%;
        gap: 8px;
        width: 64px;
        height: 29px;
        margin: -12.4px 8px -4px;
    }
`;

export const Vector = styled.img`
    margin: 2.5px 0 2.5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 16px;
        height: 16px;
    }
`;

export const Text = styled.span`
    font-size: 22px;
    font-weight: 500;
    line-height: 28.6px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        font-weight: 600;
        line-height: 24.6px;
    }
`;

export const Ten = styled.span`
    font-size: 14px;
    line-height: 33.6px;
    margin: 9px 12px 3px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        display: none;
    }
`;

export const Votes = styled.span`
    font-size: 14px;
    line-height: 33.6px;
    margin: 9px 12px 3px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        color: ${({ theme }) => theme.color.waterloo};  
        font-size: 13px;
        line-height: 0;
        margin: 0 -2px;
    }
`;

export const Description = styled.div`
    font-size: 20px;
    line-height: 1.6;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 14px;
        width: 256px;
        margin-left: -130px;
    }
`;