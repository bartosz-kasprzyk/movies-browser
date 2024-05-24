import React, { useEffect, useState } from "react";
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

export const Pagination = ({ isMoviesPage }) => {
    const location = useLocation();
    const history = useHistory();
    const { searchResults } = useSearchResults();
    const query = useQueryParameter("query");

    const { totalPagesMovies } = usePopularMovies();
    const { totalPagesPeople } = usePopularPeople();
    const totalSearchPages = +searchResults.data.total_pages;

    const totalPages = query
        ? isMoviesPage ? totalSearchPages : totalSearchPages
        : location.pathname === toMovies() ? totalPagesMovies : totalPagesPeople;

    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [previousQuery, setPreviousQuery] = useState(query);

    useEffect(() => {
        if (query !== previousQuery) {
            const newUrl = `${location.pathname}?page=1&query=${query}`;
            history.replace(newUrl);
            setPreviousQuery(query);
        } else if (!location.pathname.includes("search") && currentPage === 1) {
            const newUrl = `${location.pathname}`;
            history.replace(newUrl);
        }
    }, [currentPage, query, previousQuery, history, location.pathname]);

    const changePage = (newPage) => {
        if (1 <= newPage && newPage <= totalPages) {
            const newUrl = `${location.pathname}?page=${newPage}${query ? `&query=${query}` : ""}`
            history.push(newUrl);
        }
    };

    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    return (
        <footer>
            <Wrapper>
                <ButtonSection>
                    <ButtonTile disabled={currentPage === 1} onClick={() => changePage(1)}>
                        {isLargeScreen ? <Left /> : <><Left /><Left /></>}
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
                        {isLargeScreen ? <Right /> : <><Right /><Right /></>}
                    </ButtonTile>
                </ButtonSection>
            </Wrapper>
        </footer>
    );
};