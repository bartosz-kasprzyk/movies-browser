import { GlobalStyle } from "../../GlobalStyle";
import Header from "../../common/Header";
import { NoResultsText, StyledHeader, StyledImages } from "./styled";

const NoResults = ({ query }) => {
    <GlobalStyle>
        <StyledHeader>
            <Header />
            <NoResultsText>Sorry, there are no results for "{query}"</NoResultsText>
            <StyledImages />
        </StyledHeader>
    </GlobalStyle>
};

export default NoResults;