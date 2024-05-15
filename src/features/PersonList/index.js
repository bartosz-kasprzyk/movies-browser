import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { Pagination } from '../../common/Pagination';
import { PersonTile } from '../../common/PersonTile';
import { Grid, Heading } from './styled';
import { usePopularPeople } from './usePopularPeople';
import { Container } from '../../common/Container';

export const PersonList = () => {
    const { popularPeople } = usePopularPeople();
    const people_list = popularPeople.data;

    return (
        <>
            {
                popularPeople.status === "loading" ? (
                    <Loading />
                )
                    : popularPeople.status === "error" ? (
                        <Error />
                    )
                        : (
                            <Container>
                                <Grid>
                                    <Heading>Popular people</Heading>
                                    {people_list && people_list.map((person) => (
                                        <PersonTile
                                            key={person.id}
                                            id={person.id}
                                            image_path={person.profile_path}
                                            title={person.original_name}
                                        />
                                    ))}
                                </Grid>
                                <Pagination />
                            </Container>
                        )
            }
        </>
    )
};