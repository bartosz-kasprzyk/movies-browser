import styled from "styled-components";
import { ReactComponent as Picture } from "../../images/Picture.svg"

export const StyledHeader = styled.div`
    margin: 56px;
`;

export const StyledImages = styled(Picture)`
    width: 668px;
    height: 508px;
    margin-left: 320px;
`;

export const NoResultsText = styled.p`
text-align: left;
margin: 56px;
font-size: 36px;
font-weight: 600;
`;