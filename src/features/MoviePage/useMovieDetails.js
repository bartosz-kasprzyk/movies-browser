import axios from "axios";
import { useState, useEffect } from "react";
import { url_common_query, url_front } from "../../common/API/urlConstants";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const useMovieDetails = () => {
    const movie = useParams();

    const url = `${url_front}movie/${movie.id}${url_common_query}`;

    const [loading, setLoading] = useState(true);

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
                    status: "error",
                });
                console.error(error.message);
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            }
        };

        setTimeout(getMovieDetails, 0);
    }, [url]);

    return { loading, movieDetails };
};