import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_movie } from "../../common/API/requests";

const page = "1";
const url = `${url_front_movie}popular${url_back}&page=${page}`;

export const usePopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const response = await axios.get(url);
                setPopularMovies({
                    data: response.data,
                    status: "success",
                });
            } catch (error) {
                setPopularMovies({
                    status: "error",
                    error: error.message,
                });
                console.log(error);
            }
        };

        setTimeout(getPopularMovies, 300);
    }, []);

    return { popularMovies };
};