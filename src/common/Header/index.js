import { StyledHeader, Wrapper } from "./styled";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";

export const Header = () => (
    <StyledHeader>
        <Wrapper>
            <Navigation />
            <SearchBar />
        </Wrapper>
    </StyledHeader>
);