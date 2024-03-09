import { Wrapper, SearchIcon, SearchInput } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const SearchBar = () => {
    const location = useLocation();
    const isMoviesPage = location.pathname.startsWith("/movies");

    return (
        <Wrapper>
            <SearchIcon />
            <SearchInput
                placeholder={isMoviesPage ? "Search for movies..." : "Search for people..."}
            />
        </Wrapper>
    );
};