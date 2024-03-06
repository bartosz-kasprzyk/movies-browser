import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front_person } from "../../common/API/requests";

const url = `${url_front_person}976${url_back}`;

export const usePersonDetails = () => {
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
    }, []);

    return { personDetails };
};