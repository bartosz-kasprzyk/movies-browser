import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { url_back, url_front_movie } from "../../movies/api";

export const usePopularMovies = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [totalPagesMovies, setTotalPagesMovies] = useState(1);

    const url = `${url_front_movie}popular${url_back}`;

    const [popularMovies, setPopularMovies] = useState({
        status: "loading",
        data: [],
    });

    useEffect(() => {
        const gettotalPagesMovies = async () => {
            try {
                for (let i = 500; i <= 1000000; i++) {
                    const response = await axios.get(`${url}&page=${i}`);

                    if (response.data.results && response.data.results.length > 0) {
                        setTotalPagesMovies(i);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        gettotalPagesMovies();

        const getPopularMovies = async () => {
            try {
                const response = await axios.get(`${url}&page=${currentPage}`);

                setPopularMovies({
                    status: "success",
                    data: response.data,
                });
            } catch (error) {
                setPopularMovies({
                    status: "error"
                });
                console.log(error);
            }
        };

        setTimeout(getPopularMovies, 300);
    }, [url, currentPage]);

    return { popularMovies, totalPagesMovies };
};