import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (target) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(target);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location?.search || '');

    const isMoviesPage = location.pathname.startsWith("/movies");

    return ({ key, value }) => {
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        let newPath = isMoviesPage ? "/movies/search" : "/people/search";

        if (key === "query" && !value) {
            newPath = isMoviesPage ? "/movies" : "/people";
        }

        newPath += `?${searchParams.toString()}`;

        history.replace(newPath);
    };
};