import { Title, Grid } from './styled';
import { PersonTile } from '../../../common/PersonTile';
import { useMovieCredits } from '../useMovieCredits';

const Cast = () => {
    const { movieCredits } = useMovieCredits();
    const movie_cast = movieCredits.data.cast;

    return (
        movie_cast && movie_cast.length !== 0
            ? <>
                <Title>Cast</Title>
                <Grid>
                    {movie_cast && movie_cast.map((person) => (
                        <PersonTile
                            key={person.credit_id}
                            id={person.id}
                            image={person.profile_path}
                            title={person.name}
                            subtitle={person.character}
                        />
                    ))}
                </Grid>
            </>
            : null
    )
};

export default Cast;