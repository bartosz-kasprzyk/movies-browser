import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_person } from "../../common/API/requests";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const usePersonCredits = () => {
    const person = useParams();

    const url = `${url_front_person}${person.id}/movie_credits${url_back}`;
    
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
    }, [url]);

    return { personCredits };
};