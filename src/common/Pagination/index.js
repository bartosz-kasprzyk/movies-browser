import { useState } from "react";
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
import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { usePopularMovies } from "../../features/MovieList/usePopularMovies";
import { usePopularPeople } from "../../features/PersonList/usePopularPeople";
import { toMovies } from "../../routes";

export const Pagination = () => {
    const location = useLocation();
    const history = useHistory();

    const { totalPagesMovies } = usePopularMovies();
    const { totalPagesPeople } = usePopularPeople();

    const totalPages = location.pathname === toMovies() ? totalPagesMovies : totalPagesPeople;

    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (newPage) => {
        if (1 <= newPage && newPage <= totalPages) {
            setCurrentPage(newPage);
            const newUrl = `${location.pathname}?page=${newPage}`;
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
    )
};