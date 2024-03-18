import { useQueryParameter } from "../Header/SearchBar/queryParameters";
import { NoResultsText, StyledHeader, StyledImages } from "./styled";

const NoResults = () => {
    const query = useQueryParameter("query");

    return (
        <StyledHeader>
            <NoResultsText>Sorry, there are no results for "{query}"</NoResultsText>
            <StyledImages />
        </StyledHeader>
    );
};

export default NoResults;