import styled from "styled-components";

export const Content = styled.div`
    margin-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        display: none;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 18px;
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

export const Text = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 28.6px;
`;

export const Role = styled.span`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 18px;
    line-height: 40px;
`;