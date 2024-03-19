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

    const [searchResults, setSearchResults] = useState({
        status: "",
        data: [],
    });

    useEffect(() => {
        setSearchResults({
            status: "loading",
            data: [],
        });

        const debounce = setTimeout(async () => {
            if (query) {
                const url = `${url_front_search}${isMoviesPage ? "movie" : "person"}${url_back}&query=${query}&page=${currentPage}`;

                try {
                    const response = await axios.get(url);
                    setSearchResults({
                        status: "success",
                        data: response.data
                    });
                } catch (error) {
                    setSearchResults({
                        status: "error",
                    });
                    console.error(error.message);
                }
            }
        }, 300);

        return () => clearTimeout(debounce);
    }, [query, isMoviesPage, currentPage]);

    return { searchResults };
};