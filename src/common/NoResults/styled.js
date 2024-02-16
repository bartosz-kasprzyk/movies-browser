import styled from "styled-components";
import { ReactComponent as Picture } from "../../images/Picture.svg"

export const StyledHeader = styled.div`
    margin: 56px;
`;

export const StyledImages = styled(Picture)`
    width: 90%;
    max-width: 668px;
    height: auto;
    margin: 0 auto;

    @media (min-width: 768px) {
        margin: 0 0 20px 300px;
    }

`;

export const NoResultsText = styled.p`
text-align: left;
margin: 40px;
font-size: 36px;
font-weight: 600;

@media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    margin: auto;
}
`;