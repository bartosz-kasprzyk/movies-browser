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
                            <Top />
                            <Container>
                                <Details />
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