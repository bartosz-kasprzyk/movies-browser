import { Container } from "../Container";
import { useQueryParameter } from "../Header/SearchBar/queryParameters";
import { NoResultsText, StyledImages } from "./styled";

const NoResults = () => {
    const query = useQueryParameter("query");

    return (
        <main>
            <Container>
                <NoResultsText>Sorry, there are no results for "{query}"</NoResultsText>
                <StyledImages />
            </Container>
        </main>
    );
};

export default NoResults;