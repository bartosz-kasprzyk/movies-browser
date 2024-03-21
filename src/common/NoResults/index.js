import { Container } from "../Container";
import { useQueryParameter } from "../Header/SearchBar/queryParameters";
import { NoResultsText, StyledImages } from "./styled";

const NoResults = () => {
    const query = useQueryParameter("query");

    return (
        <Container>
            <NoResultsText>Sorry, there are no results for "{query}"</NoResultsText>
            <StyledImages />
        </Container>
    );
};

export default NoResults;