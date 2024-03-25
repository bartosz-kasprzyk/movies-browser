import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { Wrapper, SearchIcon, SearchInput } from "./styled";

export const SearchBar = () => {
    const query = useQueryParameter("query");
    const replaceQueryParameter = useReplaceQueryParameter();

    const location = useLocation();
    const isMoviesPage = location.pathname.startsWith("/movies");

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: "query",
            value: target.value.trim() !== "" ? target.value : undefined,
            resetPage: true
        });
    };

    return (
        <Wrapper>
            <SearchIcon />
            <SearchInput
                placeholder={isMoviesPage ? "Search for movies..." : "Search for people..."}
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};