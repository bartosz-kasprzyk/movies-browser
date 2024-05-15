import { MainTitle, Content } from './styled';
import { MovieTile } from '../../common/MovieTile';
import { Pagination } from '../../common/Pagination';
import { usePopularMovies } from './usePopularMovies';
import { useGenres } from '../../useGenres';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { Container } from '../../common/Container';

const MovieList = () => {
    const { popularMovies } = usePopularMovies();
    const movie_list = popularMovies.data;
    const { genres } = useGenres();
    const genre_list = genres.data;

    return (
        <>
            {popularMovies.status === "loading" ? (
                <Loading />
            )
                : popularMovies.status === "error" ? (
                    <Error />
                )
                    : (
                        <Container>
                            <Content>
                                <MainTitle>Popular movies</MainTitle>
                                {movie_list && movie_list.map(movie => (
                                    <MovieTile
                                        key={movie.id}
                                        id={movie.id}
                                        image_path={movie.poster_path}
                                        title={movie.title}
                                        year={movie.release_date}
                                        genres={
                                            movie.genre_ids.map((number) =>
                                                genre_list.find((item) =>
                                                    item.id === number).name
                                            )
                                        }
                                        rating={movie.vote_average}
                                        votes={movie.vote_count}
                                    />
                                ))}
                            </Content>
                            <Pagination />
                        </Container>
                    )
            }
        </>
    )
};

export default MovieList;