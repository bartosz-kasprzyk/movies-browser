import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_movie } from "../../movies/api";

export const usePopularMovies = () => {

    const url = `${url_front_movie}popular${url_back}`;

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