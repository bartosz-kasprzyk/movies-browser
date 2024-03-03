import MovieList from "../features/MovieList";
import Loading from "../common/Loading";
import { usePopularMovies } from "../features/MovieList/usePopularMovies";

const Homepage = () => {
    const { popularMovies } = usePopularMovies();

    return (
        <>
            {popularMovies.status === "loading" ? (
                <Loading />
            )
                : (<MovieList />)}
        </>
    )
};

export default Homepage;