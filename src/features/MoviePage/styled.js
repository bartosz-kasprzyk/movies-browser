import styled from "styled-components";

export const Image = styled.img`
    width: 312px;
    height: 464px;
`;

export const Content = styled.div`
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 18px;
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
    list-style: none;  
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

export const Shape = styled.div`
`;

export const Element = styled.img`
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

export const Cast = styled.div`
    margin-top: 64px;
`;

export const ImageTile = styled.li`
    width: 208px;
    height: 339px;
    background: ${({ theme }) => theme.color.white};
`;

export const Picture = styled.img`
    border-radius: 5px;
    margin: 16px;
`;

export const Character = styled.div`
    margin-top: -10px;
`;

export const Name = styled.div`
    text-align: center;
`;

export const Role = styled.span`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 18px;
    line-height: 40px;
`;

export const Crew = styled.div`
    margin-top: 64px;
`;