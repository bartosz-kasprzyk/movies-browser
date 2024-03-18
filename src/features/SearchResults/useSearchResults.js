import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_search } from "../../common/API/requests";
import { useQueryParameter } from "../../common/Header/SearchBar/queryParameters";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"; 

export const useSearchResults = () => {
    const query = useQueryParameter("query");
    const location = useLocation();
    const isMoviesPage = location.pathname.startsWith("/movies");
    const currentPage = new URLSearchParams(location.search).get("page") || 1;

    const [firstSearch, setFirstSearch] = useState(true); // Dodajemy stan, który śledzi, czy jest to pierwsze uruchomienie wyszukiwania

    const [searchResults, setSearchResults] = useState({
        status: "loading",
        data: [],
    });

    useEffect(() => {
        setSearchResults({ status: "loading", data: [] });

        const debounce = setTimeout(async () => {
            if (query) {
                const url = `${url_front_search}${isMoviesPage ? "movie" : "person"}${url_back}&query=${query}&page=${currentPage}`;

                try {
                    const response = await axios.get(url);
                    setSearchResults({
                        status: "success",
                        data: response.data
                    });

                    // Przekierowanie na pierwszą stronę tylko przy pierwszym uruchomieniu wyszukiwania
                    if (firstSearch && currentPage !== 1) {
                        setFirstSearch(false); // Ustawiamy firstSearch na false, aby zapobiec przekierowaniu przy kolejnych wyszukiwaniach
                        const newUrl = `${location.pathname}?query=${query}&page=1`;
                        window.history.replaceState({}, '', newUrl); // Aktualizujemy URL bez przeładowania strony
                    }
                } catch (error) {
                    setSearchResults({
                        status: "error",
                        error: error.message,
                    });
                    console.error(error);
                }
            }
        }, 300);

        return () => clearTimeout(debounce);
    }, [query, isMoviesPage, currentPage, firstSearch, location.pathname]);

    return { searchResults };
};