import styled from "styled-components";
import background from "../images/Poster big.png";
import plexa from "../images/Pleksa.png";

export const Wrapper = styled.main`
    background-image: url("${plexa}"), url("${background}");
    background-position: center;
    width: 1920px;
    height: 770px;
    margin: 0 0 64px -276px;
`;

export const MainInfo = styled.div`
    color: ${({ theme }) => theme.color.white};
    padding: 528px 276px;
`;

export const MainTitle = styled.div`
    font-weight: 600;
    font-size: 64px;
`;

export const Opinion = styled.p` 
    display: grid;
    grid-template-columns: auto 1fr;
`;

export const Rating = styled.div`
    display: flex;
    gap: 8px;
    width: 91px;
    height: 40px;
    margin-right: 8px;
`;

export const Vector = styled.img`
    width: 40px;
    height: 40px;
    margin: 2.5px 0 2.5px;
`;

export const Text = styled.div`
    font-size: 30px;
    font-weight: 500;
    line-height: 50px;
`;

export const Item = styled.span`
    font-size: 16px;
    margin: 18px 12px 0 0;
`;