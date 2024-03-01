import axios from "axios";
import { useState, useEffect } from "react";
import { genres_movielist } from "../src/common/API/requests";

export const useGenres = () => {
    const [genres, setGenres] = useState({
        data: [],
    });

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

        setTimeout(getGenres, 300);
    }, []);

    return { genres };
};