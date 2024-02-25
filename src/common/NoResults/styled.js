import styled from "styled-components";
import { ReactComponent as Picture } from "../../images/Picture.svg"

export const StyledHeader = styled.div`
    margin: 56px;
`;

export const StyledImages = styled(Picture)`
 display: flex;
 width: 90%;
 height: auto;
 justify-content: center;
 position: relative;

 @media (max-width: ${({ theme }) => theme.breakpoint.phone}){
    margin: auto;
    max-width: 100%;
 }
`;

export const NoResultsText = styled.p`
text-align: left;
margin: 40px;
font-size: 36px;
font-weight: 600;

@media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    margin: auto;
    font-size: 14px;
}
`;
