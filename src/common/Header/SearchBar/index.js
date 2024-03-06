import { Wrapper, SearchIcon, SearchInput } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { toMovie, toMovies } from "../../../routes";

export const SearchBar = () => {
    const location = useLocation();
    const isMoviesPage = location.pathname === toMovies();
    const isMoviePage = location.pathname === toMovie();

    return (
        <Wrapper>
            <SearchIcon />
            <SearchInput
                placeholder={isMoviesPage || isMoviePage ? "Search for movies..." : "Search for people..."}
            />
        </Wrapper>
    );
};