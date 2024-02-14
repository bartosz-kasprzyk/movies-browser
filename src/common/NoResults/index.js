import { NoResultsText, StyledHeader, StyledImages } from "./styled";

const NoResults = ({ query }) => {
    return (
            <StyledHeader>
                <NoResultsText>Sorry, there are no results for "{query}"</NoResultsText>
                <StyledImages />
            </StyledHeader>
    );
};

export default NoResults;