import styled from "styled-components";

export const Content = styled.main`
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 288px;
    }
`;

export const MainTitle = styled.h1`
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

export const Description = styled.span`
    margin: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin-left: 32px;
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
        margin: 0;
        line-height: 20.8px;
    }
`;

export const Year = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    padding: 4px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        margin-bottom: -4px;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    gap: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin: 8px 0;
}
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 5px;
    margin-top: 6px;
    margin-bottom: -14px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 10px;
        padding: 3px 8px;
        margin: 0;
}
`;

export const Opinion = styled.span`
    display: grid;
    grid-template-columns: auto 1fr;
    margin: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin: -64px 0 0 138px;
    }
`;

export const Rating = styled.div`
    display: flex;
    gap: 12px;
    margin: 0 8px 3px 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        gap: 8px; 
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
        line-height: 16.9px;
}
`;

export const Votes = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 10.4px;
    margin: 9px 6px 3px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        color: ${({ theme }) => theme.color.waterloo};
        width: 100px;
        font-size: 13px;
        margin: 3px 0;
}
`;