import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { url_back, url_front_person } from "../../movies/api";

export const usePopularPeople = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [totalPagesPeople, setTotalPagesPeople] = useState(1);

    const url = `${url_front_person}popular${url_back}`;

    const [popularPeople, setPopularPeople] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getTotalPagesPeople = async () => {
            try {
                for (let i = 500; i <= 1000000; i++) {
                    const response = await axios.get(`${url}&page=${i}`);

                    if (response.data.results && response.data.results.length > 0) {
                        setTotalPagesPeople(i);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        getTotalPagesPeople();

        const getPopularPeople = async () => {
            try {
                const response = await axios.get(`${url}&page=${currentPage}`);

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
    }, [url, currentPage]);

    return { popularPeople, totalPagesPeople };
};