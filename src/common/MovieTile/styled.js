import styled from "styled-components";

export const Wrapper = styled.article`
    background: ${({ theme }) => theme.color.white};
    width: 324px;
    height: 650px;
    padding: 16px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: column;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        flex-direction: row;
        width: 288px;
        height: 201px;
        gap: 16px;
}
`;

export const Image = styled.img`
    width: 292px;
    height: 434px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 114px;
        height: 169px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    }
`;

export const Title = styled.header`
    margin-top: 16px;
    font-weight: 500;
    font-size: 22px;
    line-height: 28.6px;
    margin: 16px 0 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 16px;
        margin: 0;
        line-height: 20.8px;
    }
`;

export const Year = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    margin-bottom: 8px;
    line-height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 13px;
        margin-bottom: 0;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-left: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        margin: 6px 0 8px;
}
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 5px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 10px;
        padding: 4px 8px;
}
`;

export const Opinion = styled.div`
    display: flex;
    gap: 12px;
    margin-top: auto;
    margin-bottom: -4px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        margin-top: 4px;
}
`;

export const Rating = styled.div`
    display: flex;
    gap: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        gap: 8px; 
}
`;

export const Vector = styled.img`
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 16px;
        height: 16px;
}
`;

export const Text = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: 13px;
        line-height: 16.9px;
}
`;

export const Votes = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        color: ${({ theme }) => theme.color.waterloo};
        font-size: 13px;
        margin: -5.6px;
}
`;