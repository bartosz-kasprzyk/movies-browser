import { Wrapper, SearchIcon, SearchInput } from "./styled";

export const SearchBar = () => (
    <Wrapper>
        <SearchIcon />
        <SearchInput
            placeholder="Search for movies..."
        />
    </Wrapper>
);