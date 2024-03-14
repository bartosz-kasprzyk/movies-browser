import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (target) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(target);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location?.search || '');

    return ({ key, value }) => {
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        let newPath = location.pathname;

        if (key === 'query' && !value && newPath.endsWith('/search')) {
            newPath = newPath.substring(0, newPath.lastIndexOf('/search'));
        } else if (!newPath.includes('/search')) {
            newPath += '/search';
        }

        newPath += `?${searchParams.toString()}`;

        history.replace(newPath);
    };
};