import { Title, MovieNavLink, Grid } from './styled';
import poster from '../../../../images/poster.png';
import star from '../../../../images/star.svg';
import { MovieTile } from '../../../../common/MovieTile';

export const PartOfCrew = () => (
    <>
        <Title>Movies - Crew (4)</Title>
        <Grid>
            <MovieNavLink to="/movie">
                <MovieTile
                    image={poster}
                    title="Mulan"
                    year="2020"
                    star={star}
                    rating="7,8"
                    votes="335"
                />
            </MovieNavLink>
            <MovieNavLink to="/movie">
                <MovieTile
                    image={poster}
                    title="Mulan"
                    year="2020"
                    star={star}
                    rating="7,8"
                    votes="335"
                />
            </MovieNavLink>
            <MovieNavLink to="/movie">
                <MovieTile
                    image={poster}
                    title="Mulan"
                    star={star}
                    rating="7,8"
                    votes="335"
                />
            </MovieNavLink>
            <MovieNavLink to="/movie">
                <MovieTile
                    image={poster}
                    title="Mulan long title long title Mulan long title long"
                    year="2020"
                    star={star}
                    rating="7,8"
                    votes="335"
                />
            </MovieNavLink>
        </Grid>
    </>
);