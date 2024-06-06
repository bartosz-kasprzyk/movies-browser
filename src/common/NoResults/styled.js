import styled from "styled-components";
import { ReactComponent as Picture } from "../../images/Picture.svg"

export const StyledImages = styled(Picture)`
    display: flex;
    width: 668px;
    height: auto;
    justify-content: center;
    position: relative;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}){
        max-width: 100%;
    }
`;

export const NoResultsText = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.xl6};
    margin: 0 0 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xl5};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xl};
        margin-bottom: 12px;
    }
`;