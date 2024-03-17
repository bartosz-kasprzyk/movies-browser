import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_movie } from "../../common/API/requests";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const useMovieDetails = () => {
    const movie = useParams();

    const url = `${url_front_movie}${movie.id}${url_back}`;

    const [movieDetails, setMovieDetails] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const response = await axios.get(url);
                setMovieDetails({
                    data: response.data,
                    status: "success",
                });
            } catch (error) {
                setMovieDetails({
                    status: "error"
                });
                console.log(error);
            }
        };

        setTimeout(getMovieDetails, 300);
    }, [url]);

    return { movieDetails };
};