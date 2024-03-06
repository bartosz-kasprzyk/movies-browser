import Cast from './Cast';
import Crew from './Crew';
import Loading from '../../common/Loading';
import { DetailTile } from '../../common/DetailTile';
import { useMovieDetails } from './useMovieDetails';
import Top from './Top';
import { Container } from '../../common/Container';

export const MoviePage = () => {
    const { movieDetails } = useMovieDetails();
    const movie = movieDetails.data;

    return (
        <>
            {movieDetails.status === "loading" ? (
                <Loading />
            )
                : movieDetails.status === "error" ? (
                    "Error while fetching data from external API"
                )
                    : (
                        <>
                            <Top
                                poster={movie.backdrop_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                votes={movie.vote_count}
                            />
                            <Container>
                                <DetailTile
                                    image={movie.poster_path}
                                    title={movie.title}
                                    year={movie.release_date}
                                    production_countries={movie.production_countries}
                                    production={
                                        movie.production_countries.map(
                                            (place) => place.name
                                        )
                                    }
                                    production_short={
                                        movie.production_countries.map(
                                            (place) => place.iso_3166_1
                                        )
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