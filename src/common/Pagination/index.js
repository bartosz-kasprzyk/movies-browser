import { useLocation, useHistory } from "react-router-dom";
import { useScreenWidth } from "../../useScreenWidth";
import {
    Wrapper,
    Left,
    Right,
    ButtonSection,
    ButtonTile,
    ButtonText,
    CounterWrapper,
    CounterText,
    CounterNumber
} from "./styled";
import { usePopularMovies } from "../../features/MovieList/usePopularMovies";
import { usePopularPeople } from "../../features/PersonList/usePopularPeople";
import { toMovies } from "../../routes";
import { useSearchResults } from "../../features/SearchResults/useSearchResults";
import { useQueryParameter } from "../Header/SearchBar/queryParameters";
import { useEffect, useState } from "react";

export const Pagination = ({ isMoviesPage }) => {
    const location = useLocation();
    const history = useHistory();
    const { searchResults } = useSearchResults();
    const query = useQueryParameter("query");

    const { totalPagesMovies } = usePopularMovies();
    const { totalPagesPeople } = usePopularPeople();
    const totalSearchPages = +searchResults.data?.total_pages;

    const totalPages = query
        ? isMoviesPage ? totalSearchPages : totalSearchPages
        : location.pathname === toMovies() ? totalPagesMovies : totalPagesPeople;

    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [pageOne, setPageOne] = useState(false);

    useEffect(() => {
        if (query && !pageOne && (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages)) {
            const newUrl = `${location.pathname}?query=${query}&page=1`;
            history.replace(newUrl);
            setPageOne(true);
        }
    }, [currentPage, pageOne, history, location.pathname, query, totalPages]);

    const changePage = (newPage) => {
        if (1 <= newPage && newPage <= totalPages) {
            const newUrl =`${location.pathname}?${query ? `query=${query}&` : ""}page=${newPage}`
            history.push(newUrl);
        }
    };

    const screenWidth = useScreenWidth();

    return (
        <Wrapper>
            <ButtonSection>
                <ButtonTile disabled={currentPage === 1} onClick={() => changePage(1)}>
                    {screenWidth > 767 ? <Left /> : <><Left /><Left /></>}
                    <ButtonText>
                        First
                    </ButtonText>
                </ButtonTile>

                <ButtonTile disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
                    <Left />
                    <ButtonText>
                        Previous
                    </ButtonText>
                </ButtonTile>
            </ButtonSection>

            <CounterWrapper>
                <CounterText>Page</CounterText>
                <CounterNumber>{currentPage.toLocaleString(undefined, {
                    useGrouping: true,
                })}</CounterNumber>
                <CounterText>of</CounterText>
                <CounterNumber>{totalPages.toLocaleString(undefined, {
                    useGrouping: true,
                })}</CounterNumber>
            </CounterWrapper>

            <ButtonSection>
                <ButtonTile disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
                    <ButtonText>
                        Next
                    </ButtonText>
                    <Right />
                </ButtonTile>

                <ButtonTile disabled={currentPage === totalPages} onClick={() => changePage(totalPages)}>
                    <ButtonText>
                        Last
                    </ButtonText>
                    {screenWidth > 767 ? <Right /> : <><Right /><Right /></>}
                </ButtonTile>
            </ButtonSection>
        </Wrapper>
    );
};