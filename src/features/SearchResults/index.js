import { Content, Grid, MainTitle } from './styled';
import { Pagination } from '../../common/Pagination';
import { Container } from '../../common/Container';
import { useQueryParameter } from '../../common/Header/SearchBar/queryParameters';
import { useSearchResults } from './useSearchResults';
import { useGenres } from '../../useGenres';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { MovieTile } from '../../common/MovieTile';
import NoResults from '../../common/NoResults';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { PersonTile } from '../../common/PersonTile';

const SearchResults = () => {
    const query = useQueryParameter("query");

    const location = useLocation();
    const isMoviesPage = location.pathname.includes("/movies");

    const { searchResults } = useSearchResults();
    const search_quantity = searchResults.data.total_results;
    const search_list = searchResults.data.results;

    const { genres } = useGenres();
    const genre_list = genres.data;

    return (
        <>
            {searchResults.status === "loading" ? (
                <Container>
                    <MainTitle>Search results for "{query}"</MainTitle>
                    <Loading />
                </Container>
            )
                : searchResults.status === "error" ? (
                    <Error />
                )
                    : search_quantity === 0 ? (
                        <NoResults />
                    )
                        : isMoviesPage ? (
                            <Container>
                                <MainTitle>Search results for "{query}" ({searchResults ? search_quantity : ""})</MainTitle>
                                <Content>
                                    {search_list && search_list.map(movie => (
                                        <MovieTile
                                            key={movie.id}
                                            id={movie.id}
                                            image={movie.poster_path}
                                            title={movie.title}
                                            year={movie.release_date}
                                            genres={
                                                movie.genre_ids.map((number) =>
                                                    genre_list.find((item) =>
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
                            : (
                                <Container>
                                    <MainTitle>Search results for "{query}" ({searchResults ? search_quantity : ""})</MainTitle>
                                    <Grid>
                                        {search_list && search_list.map((person) => (
                                            <PersonTile
                                                key={person.id}
                                                id={person.id}
                                                image={person.profile_path}
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

export default SearchResults;