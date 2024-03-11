import Top from './Top';
import Cast from './Cast';
import Crew from './Crew';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import Details from './Details';
import { useMovieDetails } from './useMovieDetails';
import { Container } from '../../common/Container';

const MoviePage = () => {
    const { movieDetails } = useMovieDetails();
    const movie = movieDetails.data;

    return (
        <>
            {movieDetails.status === "loading" ? (
                <Loading />
            )
                : movieDetails.status === "error" ? (
                    <Error />
                )
                    : (
                        <>
                            {movie.backdrop_path
                                ? <Top
                                    poster={movie.backdrop_path}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    votes={movie.vote_count}
                                />
                                : null
                            }
                            <Container>
                                <Details
                                    image={movie.poster_path}
                                    title={movie.title}
                                    year={movie.release_date}
                                    production_countries={movie.production_countries}
                                    production={
                                        movie.production_countries.map(
                                            (place) => place.name
                                        ).join(", ")
                                    }
                                    production_short={
                                        movie.production_countries.map(
                                            (place) => place.iso_3166_1
                                        ).join(", ")
                                    }
                                    date={movie.release_date}
                                    genres={
                                        movie.genres.map((genre) =>
                                            genre.name
                                        )
                                    }
                                    rating={movie.vote_average}
                                    votes={movie.vote_count}
                                    description={movie.overview}
                                />
                                <Cast />
                                <Crew />
                            </Container>
                        </>
                    )
            }
        </>
    )
};

export default MoviePage;