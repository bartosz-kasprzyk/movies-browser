import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_person } from "../../api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const usePersonDetails = () => {
    const person = useParams();

    const url = `${url_front_person}${person.id}${url_back}`;

    const [personDetails, setPersonDetails] = useState({
        status: "loading",
        data: [],
    });

    useEffect(() => {
        const getPersonDetails = async () => {
            try {
                const response = await axios.get(url);
                setPersonDetails({
                    status: "success",
                    data: response.data,
                });
            } catch (error) {
                setPersonDetails({
                    status: "error"
                });
                console.log(error);
            }
        };

        setTimeout(getPersonDetails, 1000);
    }, [url]);

    return { personDetails };
};