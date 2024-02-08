import styled from "styled-components";

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 18px;
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
`;

export const Content = styled.div`
`;

export const Year = styled.div`
    font-size: 22px;
`;

export const Production = styled.p`
    font-size: 18px;
`;

export const Info = styled.span`
    color: ${({ theme }) => theme.color.stormGrey};
    margin-right: 11px;
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: -8px;
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
`;

export const Opinion = styled.p`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 16px -8px;
`;

export const Rating = styled.div`
    display: flex;
    gap: 8px;
    width: 64px;
    height: 29px;
    margin: 9px 8px 3px 8px;
`;

export const Vector = styled.img`
    margin: 2.5px 0 2.5px;
`;

export const Text = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 28.6px;
`;

export const Item = styled.span`
    font-size: 14px;
    line-height: 33.6px;
    margin: 9px 12px 3px 0;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
`;