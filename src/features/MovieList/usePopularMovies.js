import axios from "axios";
import { useState, useEffect } from "react";
import { movie_popular } from "../../common/API/requests";

const page = "1";
const url = `${movie_popular}&page=${page}`;

export const usePopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState({
        status: "loading",
        data: [],
    });

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const response = await axios.get(url);
                setPopularMovies({
                    status: "success",
                    data: response.data.results,
                });
            } catch (error) {
                setPopularMovies({
                    status: "error"
                });
                console.log(error);
            }
        };

        setTimeout(getPopularMovies, 300);
    }, []);

    return { popularMovies };
};