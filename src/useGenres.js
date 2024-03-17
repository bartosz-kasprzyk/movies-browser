import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_genre } from "../src/common/API/requests";

const url = `${url_front_genre}${url_back}`;

export const useGenres = () => {
    const [genres, setGenres] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getGenres = async () => {
            try {
                const response = await axios.get(url);
                setGenres({
                    data: response.data.genres,
                    status: "success",
                });
            } catch (error) {
                setGenres({
                    status: "error",
                    error: error.message,
                });
                console.log(error);
            }
        };

        setTimeout(getGenres, 0);
    }, []);

    return { genres };
};
