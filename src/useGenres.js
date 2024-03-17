import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_genre } from "../src/common/API/requests";

const url = `${url_front_genre}${url_back}`;

export const useGenres = () => {
    const [genres, setGenres] = useState({});

    useEffect(() => {
        const getGenres = async () => {
            try {
                const response = await axios.get(url);
                setGenres({
                    data: response.data.genres,
                });
            } catch (error) {
                console.log(error);
            }
        };

        setTimeout(getGenres, 0);
    }, []);

    return { genres };
};
