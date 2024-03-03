import Top from './Top';
import Cast from './Cast';
import Crew from './Crew';
import { useScreenWidth } from '../../useScreenWidth';
import { DetailTile } from '../../common/DetailTile';
import star from '../../images/star.svg';
import { Container } from '../../common/Container';
import { usePopularMovies } from '../MovieList/usePopularMovies';
import { useGenres } from '../../useGenres';

const MoviePage = () => {
    const screenWidth = useScreenWidth();
    const { popularMovies } = usePopularMovies();
    const movie_list = popularMovies.data;
    const { genres } = useGenres();
    const genre_list = genres.data;
    const { configuration } = usePopularMovies();
    const config = configuration.data;

    return (
        <>
            {popularMovies.status === "success" ? (
                <>

                    <Top />
                    <Container>
                        {movie_list.map(movie => (
                            <DetailTile
                                key={movie.id}
                                image={movie.poster_path}
                                title={movie.title}
                                year={movie.release_date}
                                infotitle="Production:"
                                infoSubtitle="Release date:"
                                contentTitle={config.countries[screenWidth > 767 ? ".english_name" : ".iso_3166_1"]}
                                contentSubtitle={movie.release_date}
                                genres={
                                    movie.genre_ids.map((number) =>
                                        genre_list.find((item) =>
                                            item.id === number).name
                                    )
                                }
                                star={star}
                                rating={movie.vote_average}
                                votes={movie.vote_count}
                                description={movie.overview}
                            />
                        ))}
                        <Cast />
                        <Crew />
                    </Container>
                </>
            )
                : null
            }
        </>
    )
};

export default MoviePage;