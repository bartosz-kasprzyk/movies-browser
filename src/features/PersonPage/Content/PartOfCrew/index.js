import { Title, Grid } from './styled';
import { MovieTile } from '../../../../common/MovieTile';
import { usePersonCredits } from '../../usePersonCredits';
import { useGenres } from '../../../../common/hooks/useGenres';

export const PartOfCrew = () => {
    const { personCredits } = usePersonCredits();
    const person_crew = personCredits.data.crew;
    const { genres } = useGenres();
    const genre_list = genres.data;

    if (genres.status === "loading") {
        return null;
    }

    if (!person_crew || person_crew.length === 0) {
        return null;
    }

    return (
        <Grid>
            <Title>Movies - Crew ({person_crew.length})</Title>
            {person_crew && person_crew.map((movie) => (
                <MovieTile
                    key={movie.credit_id}
                    id={movie.id}
                    image_path={movie.poster_path}
                    title={movie.title}
                    role={movie.job}
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