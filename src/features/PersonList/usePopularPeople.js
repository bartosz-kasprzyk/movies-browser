import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_person } from "../../movies/api";

const page = "1";
const url = `${url_front_person}popular${url_back}&page=${page}`;

export const usePopularPeople = () => {
    const [popularPeople, setPopularPeople] = useState({
        status: "loading",
        data: [],
    });

    useEffect(() => {
        const getPopularPeople = async () => {
            try {
                const response = await axios.get(url);
                setPopularPeople({
                    status: "success",
                    data: response.data,
                });
            } catch (error) {
                setPopularPeople({
                    status: "error"
                });
                console.log(error);
            }
        };

        setTimeout(getPopularPeople, 300);
    }, []);

    return { popularPeople };
};