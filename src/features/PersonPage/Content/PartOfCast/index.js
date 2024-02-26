import { Title, MovieNavLink, Grid } from './styled';
import poster from '../../../../images/poster.png';
import star from '../../../../images/star.svg';
import { MovieTile } from '../../../../common/MovieTile';

export const PartOfCast = () => {
    const genreList1 = [];
    const genreList2 = ["Action"];
    const genreList3 = ["Action", "Adventure"];
    const genreList4 = ["Action", "Adventure", "Drama"];

    return (
        <>
            <Title>Movies - Cast (4)</Title>
            <Grid>
                <MovieNavLink to="/movie">
                    <MovieTile
                        image={poster}
                        title="Mulan"
                        role="Mulan"
                        year="2020"
                        genres={genreList1}
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
                        genres={genreList2}
                        star={star}
                        rating="7,8"
                        votes="335"
                    />
                </MovieNavLink>
                <MovieNavLink to="/movie">
                    <MovieTile
                        image={poster}
                        title="Mulan"
                        genres={genreList3}
                        star={star}
                        rating="7,8"
                        votes="335"
                    />
                </MovieNavLink>
                <MovieNavLink to="/movie">
                    <MovieTile
                        image={poster}
                        title="Mulan long title long title Mulan long title long"
                        role="Mulan"
                        genres={genreList4}
                        star={star}
                        rating="7,8"
                        votes="335"
                    />
                </MovieNavLink>
            </Grid>
        </>
    )
};