import { MainTitle, MovieNavLink, Row, Wrapper } from './styled';
import { MovieTile } from '../../common/MovieTile';
import poster from '../MoviePage/images/poster.png';
import empty from '../MoviePage/images/no poster.png';
import star from '../MoviePage/images/star.svg';
import { Pagination } from '../../common/Pagination';

const MovieList = () => (
    <Wrapper>
        <MainTitle>Popular movies</MainTitle>
        <Row>
            <MovieNavLink>
                <MovieTile
                    image={poster}
                    title="Mulan"
                    year="2020"
                    genreOne="Action"
                    genreTwo="Adveture"
                    genreThree="Drama"
                    star={star}
                    rating="7,8"
                    votes="335"
                />
            </MovieNavLink>
            <MovieTile
                image={poster}
                title="Mulan"
                year="2020"
                star={star}
                rating="7,8"
                votes="335"
            />
            <MovieTile
                image={empty}
                title="Mulan"
                genreOne="Action"
                star={star}
                rating="7,8"
                votes="335"
            />
            <MovieTile
                image={poster}
                title="Mulan long title long title Mulan long title long"
                year="2020"
                genreOne="Action"
                star={star}
                rating="7,8"
                votes="335"
            />
            <MovieTile
                image={poster}
                title="Mulan"
                year="2020"
                genreOne="Action"
                genreTwo="Adveture"
                genreThree="Drama"
                star={star}
                rating="7,8"
                votes="335"
            />
            <MovieTile
                image={poster}
                title="Mulan"
                year="2020"
                star={star}
                rating="7,8"
                votes="335"
            />
            <MovieTile
                image={empty}
                title="Mulan"
                genreOne="Action"
                star={star}
                rating="7,8"
                votes="335"
            />
            <MovieTile
                image={poster}
                title="Mulan long title long title Mulan long title long"
                year="2020"
                genreOne="Action"
                star={star}
                rating="7,8"
                votes="335"
            />
        </Row>
        <Pagination />
    </Wrapper>
);

export default MovieList;