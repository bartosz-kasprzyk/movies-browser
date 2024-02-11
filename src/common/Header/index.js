import { Background, Wrapper } from "./styled";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";

export const Header = () => (
    <Background>
        <Wrapper>
            <Navigation />
            <SearchBar />
        </Wrapper>
    </Background>
);