import {
    Wrapper,
    MainInfo,
    MainTitle,
    Opinion,
    Rating,
    Ten,
    Votes,
    Text,
    Vector,
    Poster,
    Plexa,
    BlackBar
} from './styled';
import star from '../../../images/star.svg';
import plexa from "../../../images/plexa.png";
import { useMovieDetails } from '../useMovieDetails';

const Top = () => {
    const { movieDetails } = useMovieDetails();
    const movie = movieDetails.data;

    return (
        <BlackBar>
            <Wrapper>
                <Poster src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path} />
                <Plexa src={plexa} />
                <MainInfo>
                    <MainTitle>{movie?.title}</MainTitle>

                    {movie?.vote_average
                        ? <Opinion>
                            <Rating>
                                <Vector src={star} alt="" />
                                <Text>{movie.vote_average.toFixed(1).replace(".", ",")}</Text>
                            </Rating>
                            <Ten>/ 10</Ten>
                            <Votes>
                                {movie.vote_count.toLocaleString(undefined, {
                                    useGrouping: true,
                                })}
                                {movie.vote_count === 1 ? " vote" : " votes"}
                            </Votes>
                        </Opinion>
                        : movie.backdrop_path
                            ? <Opinion>
                                <Votes>No votes yet</Votes>
                            </Opinion>
                            : null
                    }

                </MainInfo>
            </Wrapper>
        </BlackBar>
    )
};

export default Top;