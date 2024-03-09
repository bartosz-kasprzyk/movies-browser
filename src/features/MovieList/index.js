import { MainTitle, Content, Wrapper } from './styled';
import { MovieTile } from '../../common/MovieTile';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { Pagination } from '../../common/Pagination';
import { usePopularMovies } from './usePopularMovies';
import { useGenres } from '../../useGenres';

export const MovieList = () => {
    const { popularMovies } = usePopularMovies();
    const movie_list = popularMovies.data.results;
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
                        <Wrapper>
                            <MainTitle>Popular movies</MainTitle>
                            <Content>
                                {movie_list && movie_list.map((movie) => (
                                    <MovieTile
                                        key={movie.id}
                                        image={movie.poster_path}
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
                        </Wrapper>
                    )
            }
        </>
    )
};