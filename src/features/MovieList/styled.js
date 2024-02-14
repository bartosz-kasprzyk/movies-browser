import styled from "styled-components";

export const Content = styled.main`
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 288px;
        height: 201px;
    }
`;

export const Header = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 18px;
    }
`;

export const Picture = styled.img`
    width: 292px;
    height: 434px;
    border-radius: 5px;
    margin: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 114px;
        height: 169px;
    }
`;

export const Title = styled.header`
    font-weight: 500;
    font-size: 22px;
    margin-top: -16px;
    margin-bottom: 4px;
    line-height: 28.6px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 16px;
    }
`;

export const Description = styled.span`
    margin: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin: 28px 0;
    }
`;

export const Year = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    padding: 4px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        margin: -8px 0;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 0;
    margin: -8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin: 4px -8px 20px;
}
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    padding: 8px 16px;
    margin: 12px 0 -12px 8px;
    border-radius: 5px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        display: flex;
        flex-wrap: wrap;
        font-size: 10px;
        padding: 3px 8px;
        margin: 4px 0 4px 8px;
}
`;

export const TagMiddle = styled.li`
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        order: 1;
}
`;

export const Opinion = styled.span`
    display: grid;
    grid-template-columns: auto 1fr;
    margin: 8px;
`;

export const Rating = styled.div`
    display: flex;
    gap: 12px;
    margin: 0 8px 3px 8px;

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
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 16px;
        height: 16px;
}
`;

export const Text = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        font-weight: 600;
        line-height: 24.6px;
}
`;

export const Votes = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 10.4px;
    margin: 9px 6px 3px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        color: ${({ theme }) => theme.color.waterloo};  
        font-size: 13px;
        line-height: 0;
        margin: 0 -2px;
}
`;