import { Title, Grid } from './styled';
import { PersonTile } from '../../../common/PersonTile';
import { useMovieCredits } from '../useMovieCredits';

const Cast = () => {
    const { movieCredits } = useMovieCredits();
    const movie_cast = movieCredits.data.cast;

    return (
        <>
            <Title>Cast</Title>
            <Grid>
                {movie_cast && movie_cast.map((person) => (
                    <PersonTile
                        to={`/people/${person.credit_id}`}
                        key={person.credit_id}
                        image={person.profile_path}
                        title={person.name}
                        subtitle={person.character}
                    />
                ))}
            </Grid>
        </>
    )
};

export default Cast;