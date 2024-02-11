import styled from "styled-components";
import { ReactComponent as Picture } from "../../images/Picture.svg"

export const StyledHeader = styled.div`
    margin: 56px;
`;

export const StyledImages = styled(Picture)`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const NoResultsText = styled.p`
text-align: center;
margin-top: 20px;
font-size: 18px;
color: black;
`;