import axios from "axios";

export const fetchAPI = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fatching data: ${error.massage}`);
    }
};