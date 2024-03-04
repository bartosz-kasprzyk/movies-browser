import Loading from "../Loading";
import Error from "../Error";
import NoResults from "../NoResults";
import { MovieTile } from "../MovieTile";
import { Container } from "../Container";
import { key, searchAPI } from "../API";
import { useEffect, useState } from "react";


export const SearchResults = ({ query }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${searchAPI}&query=${query}$api_key=${key}`);
                const result = await response.json();
                setMovies(result.results);
            } catch (e) {
                setError("Unable to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [query]);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        return <Error message={error} />;
    };

    if (movies.length === 0) {
        return <NoResults query={query} />;
    };

    return (
        <Container>
            {movies.map(movie => (
                <MovieTile key={movie.id} {...movie} />
            ))}
        </Container>
    );

};