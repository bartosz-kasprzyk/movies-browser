import styled from "styled-components";

export const Content = styled.section`
    margin-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 320px;
        margin: 21px auto;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 18px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 20px;
        margin-bottom: -8px;
        padding-left: 16px;
    }
`;

export const PersonTile = styled.ul`
    list-style: none;
    padding-left: 0;
    box-shadow: 0 4px 12px 0 rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    margin-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin-top: 0;
    }
`;

export const ImageTile = styled.li`
    width: 208px;
    height: 339px;
    background: ${({ theme }) => theme.color.white};

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 136px;
        height: 245px;
    }
`;

export const Picture = styled.img`
    border-radius: 5px;
    margin: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 120px;
        height: 178px;
        margin: 8px;
    }
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

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 14px;
        line-height: 24px;
    }
`;

export const Role = styled.span`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 18px;
    line-height: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        line-height: 30px;
    }
`;