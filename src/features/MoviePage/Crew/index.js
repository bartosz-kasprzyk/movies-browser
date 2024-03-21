import { Title, Grid } from './styled';
import { PersonTile } from '../../../common/PersonTile';
import { useMovieCredits } from '../useMovieCredits';

const Crew = () => {
    const { movieCredits } = useMovieCredits();
    const movie_crew = movieCredits.data.crew;

    return (
        movie_crew && movie_crew.length !== 0
            ? <>
                <Title>Crew</Title>
                <Grid>
                    {movie_crew && movie_crew.map((person) => (
                        <PersonTile
                            key={person.credit_id}
                            id={person.id}
                            image={person.profile_path}
                            title={person.name}
                            subtitle={person.job}
                        />
                    ))}
                </Grid>
            </>
            : null
    )
};

export default Crew;