import axios from "axios";
import { useState, useEffect } from "react";
import { genres_movielist } from "./movies/api";

export const useGenres = () => {
    const [genres, setGenres] = useState("");

    useEffect(() => {
        const getGenres = async () => {
            try {
                const response = await axios.get(genres_movielist);
                setGenres({
                    data: response.data.genres,
                });
            } catch (error) {
                console.log(error);
            }
        };

        setTimeout(getGenres, 1000);
    }, []);

    return { genres };
};