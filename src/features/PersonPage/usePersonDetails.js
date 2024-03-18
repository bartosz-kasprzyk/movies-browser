import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_person } from "../../common/API/requests";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const usePersonDetails = () => {
    const person = useParams();

    const url = `${url_front_person}${person.id}${url_back}`;

    const [personDetails, setPersonDetails] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getPersonDetails = async () => {
            try {
                const response = await axios.get(url);
                setPersonDetails({
                    data: response.data,
                    status: "success",
                });
            } catch (error) {
                setPersonDetails({
                    status: "error",
                    error: error.message,
                });
                console.log(error);
            }
        };

        setTimeout(getPersonDetails, 300);
    }, [url]);

    return { personDetails };
};