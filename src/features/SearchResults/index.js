import { Content, Grid, MainTitle } from './styled';
import { Pagination } from '../../common/Pagination';
import { Container } from '../../common/Container';
import { useQueryParameter } from '../../common/Header/SearchBar/queryParameters';
import { useSearchResults } from './useSearchResults';
import { useGenres } from '../../common/hooks/useGenres';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { MovieTile } from '../../common/MovieTile';
import NoResults from '../../common/NoResults';
import { useLocation } from 'react-router-dom';
import { PersonTile } from '../../common/PersonTile';

const SearchResults = () => {
    const query = useQueryParameter("query");

    const location = useLocation();
    const isMoviesPage = location.pathname.startsWith("/movies");

    const { searchResults } = useSearchResults();
    const search_quantity = searchResults.data?.total_results;
    const search_list = searchResults.data?.results;

    const { genres } = useGenres();
    const genre_list = genres.data;

    if (searchResults.status === "loading") {
        return (
            <Container>
                <MainTitle>Search results for "{query}"</MainTitle>
                <Loading />
            </Container>
        )
    }

    if (searchResults.status === "error") {
        return <Error />;
    }

    if (search_quantity === 0) {
        return <NoResults />;
    }

    if (isMoviesPage) {
        return (
            <Container>
                <Content>
                    <MainTitle>Search results for "{query}" ({search_quantity})</MainTitle>
                    {search_list && search_list.map(movie => (
                        <MovieTile
                            key={movie.id}
                            id={movie.id}
                            image_path={movie.poster_path}
                            title={movie.title}
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
                </Content>
                <Pagination />
            </Container>
        )
    }

    return (
        <Container>
            <Grid>
                <MainTitle>Search results for "{query}" ({search_quantity})</MainTitle>
                {search_list && search_list.map((person) => (
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
};

export default SearchResults;