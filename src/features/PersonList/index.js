import Loading from '../../common/Loading';
import { Pagination } from '../../common/Pagination';
import { PersonTile } from '../../common/PersonTile';
import { Grid, Heading } from './styled';
import { usePopularPeople } from './usePopularPeople';

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
                        "Error while fetching data from external API"
                    )
                        : (
                            <>
                                <Heading>Popular people</Heading>
                                <Grid>
                                    {people_list && people_list.map((person) => (
                                        <PersonTile
                                            image={person.profile_path}
                                            title={person.original_name}
                                        />
                                    ))}
                                </Grid>
                                <Pagination />
                            </>
                        )
            }
        </>
    )
};