import Top from './Top';
import Details from './Details';
import Cast from './Cast';
import Crew from './Crew';
import { Container } from '../../common/Container';

const MoviePage = () => (
    <>
        <Top />
        <Container>
            <Details />
            <Cast />
            <Crew />
        </Container>
    </>
);

export default MoviePage;