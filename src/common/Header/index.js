import { Background, Wrapper } from "./styled";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";

export const Header = (onSearch) => (
    <Background>
        <Wrapper>
            <Navigation />
            <SearchBar onSearch={onSearch} />
        </Wrapper>
    </Background>
);