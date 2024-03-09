import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_movie } from "../../common/API/requests";

const page = "1";
const url = `${url_front_movie}popular${url_back}&page=${page}`;

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
    }, []);

    return { popularMovies };
};