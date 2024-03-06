import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_person } from "../../common/API/requests";

const url = `${url_front_person}976/movie_credits${url_back}`;

export const usePersonCredits = () => {
    const [personCredits, setPersonCredits] = useState({
        status: "loading",
        data: [],
    });

    useEffect(() => {
        const getPersonCredits = async () => {
            try {
                const response = await axios.get(url);
                setPersonCredits({
                    status: "success",
                    data: response.data,
                });
            } catch (error) {
                setPersonCredits({
                    status: "error"
                });
                console.log(error);
            }
        };

        setTimeout(getPersonCredits, 0);
    }, []);

    return { personCredits };
};