import styled from "styled-components";

export const Wrapper = styled.main`
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
        margin-bottom: -8px;
    }
`;

export const ListTile = styled.article`
    background: ${({ theme }) => theme.color.white};
    width: 324px;
    height: 650px;
    padding: 16px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: column;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        flex-direction: row;
        width: 288px;
        height: 201px;
        gap: 16px;
}
`;

export const Picture = styled.img`
    width: 292px;
    height: 434px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 114px;
        height: 169px;
    }
`;

export const Content = styled.div`
    flex: 1;
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
    }
`;

export const Title = styled.header`
    margin-top: 16px;
    font-weight: 500;
    font-size: 22px;
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
    margin-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        margin-top: 6px;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-left: 0;
    margin: 8px 0;
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 5px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 10px;
        padding: 4px 8px;
}
`;