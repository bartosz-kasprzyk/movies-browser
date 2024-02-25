import NoResults from "../NoResults";
import Error from "../Error";
import Loading from "../Loading/script";
import { PersonList } from "../../features/PersonList";
import { useSearchResults } from "./useSearchResults";

const SearchResults = () => {
    const { searchResults, loading, error } = useSearchResults();
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    if (searchResults.lenght === 0) {
        return <NoResults />;
    }

    return (
        <>
            <PersonList />
        </>
    );
};

export default SearchResults;