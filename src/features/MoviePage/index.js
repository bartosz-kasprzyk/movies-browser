import Top from './Top';
import Cast from './Cast';
import Crew from './Crew';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import Details from './Details';
import { useMovieCredits } from './useMovieCredits';
import { useMovieDetails } from './useMovieDetails';
import { Container } from '../../common/Container';

const MoviePage = () => {
    const { movieCredits } = useMovieCredits();
    const { movieDetails } = useMovieDetails();
    const movie = movieDetails.data;
    const { loading } = useMovieDetails();

    return (
        <>
            {loading === true ? (
                <Loading />
            )
                : movieCredits.status === "error" || movieDetails.status === "error" ? (
                    <Error />
                )
                    : (
                        <main>
                            {movie.backdrop_path ?
                                <Top />
                                : null
                            }
                            <Container>
                                <Details />
                                <Cast />
                                <Crew />
                            </Container>
                        </main>
                    )
            }
        </>
    )
};

export default MoviePage;