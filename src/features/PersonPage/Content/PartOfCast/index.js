import { Title, Grid } from './styled';
import { MovieTile } from '../../../../common/MovieTile';
import { usePersonCredits } from '../../usePersonCredits';
import { useGenres } from '../../../../common/hooks/useGenres';

export const PartOfCast = () => {
    const { personCredits } = usePersonCredits();
    const person_cast = personCredits.data.cast;
    const { genres } = useGenres();
    const genre_list = genres.data;

    if (genres.status === "loading") {
        return null;
    }

    if (!person_cast || person_cast.length === 0) {
        return null;
    }

    return (
        <Grid>
            <Title>Movies - Cast ({person_cast.length})</Title>
            {person_cast && person_cast.map((movie) => (
                <MovieTile
                    key={movie.credit_id}
                    id={movie.id}
                    image_path={movie.poster_path}
                    title={movie.title}
                    role={movie.character}
                    year={movie.release_date}
                    genres={
                        movie.genre_ids?.map((number) =>
                            genre_list?.find((item) =>
                                item.id === number).name
                        )
                    }
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                />
            ))}
        </Grid>
    )
};