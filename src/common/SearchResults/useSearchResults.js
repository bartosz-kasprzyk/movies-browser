import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAPI } from "../API/fetchAPI";
import { key, language, URL } from "../API/API";

export const useSearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const page = useSelector(state => state.pagination.page);
    const query = (new URLSearchParams(location.search)).get("query");
    const moviesPage = location.pathname.includes("/movies");
    const movieOrPerson = moviesPage ? "movie" : "person";
    const fetchingURL = `${URL}/search/${movieOrPerson}?api_key=${key}&query=${query}&page=${page}&language=${language}`;

    useEffect(() => {
        const getSearchResults = async () => {
            try {
                setLoading(true);
                const response = await fetchAPI(fetchingURL);
                setSearchResults(response);
            } catch (error) {
                setError("Error while fetching data from external API", error);
            } finally {
                setLoading(false);
            }
        };

        getSearchResults();

    }, [query, page, moviesPage, fetchingURL]);

    return { searchResults, loading, error };
};
