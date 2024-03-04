import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_movie } from "../../common/API/requests";

const url = `${url_front_movie}1096197/credits${url_back}`;

export const useMovieCredits = () => {
    const [movieCredits, setMovieCredits] = useState({
        status: "loading",
        data: [],
    });

    useEffect(() => {
        const getMovieCredits = async () => {
            try {
                const response = await axios.get(url);
                setMovieCredits({
                    status: "success",
                    data: response.data,
                });
            } catch (error) {
                setMovieCredits({
                    status: "error"
                });
                console.log(error);
            }
        };

        setTimeout(getMovieCredits, 0);
    }, []);

    return { movieCredits };
};