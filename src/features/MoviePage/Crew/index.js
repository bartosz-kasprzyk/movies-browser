import { Title, Grid } from './styled';
import { PersonTile } from '../../../common/PersonTile';
import { useMovieCredits } from '../useMovieCredits';

const Crew = () => {
    const { movieCredits } = useMovieCredits();
    const movie_crew = movieCredits.data.crew;

    if (!movie_crew || movie_crew.length === 0) {
        return null;
    }

    return (
        <Grid>
            <Title>Crew</Title>
            {movie_crew && movie_crew.map((person) => (
                <PersonTile
                    key={person.credit_id}
                    id={person.id}
                    image_path={person.profile_path}
                    title={person.name}
                    subtitle={person.job}
                />
            ))}
        </Grid>
    )
};

export default Crew;