import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_movie } from "../../api";

const url = `${url_front_movie}1096197${url_back}`;

export const useMovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({
        status: "loading",
        data: [],
    });

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const response = await axios.get(url);
                setMovieDetails({
                    status: "success",
                    data: response.data,
                });
            } catch (error) {
                setMovieDetails({
                    status: "error"
                });
                console.log(error);
            }
        };

        setTimeout(getMovieDetails, 1000);
    }, []);

    return { movieDetails };
};