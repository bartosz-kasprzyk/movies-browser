import Loading from "../Loading";
import NoResults from "../NoResults";
import { PersonList } from "../../features/PersonList";

const SearchResults = ({ loading, error, noResults, query }) => {
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    if (noResults) {
        return <NoResults query={query} />;
    }

    return (
        <>
            <PersonList />
        </>
    );
};

export default SearchResults;