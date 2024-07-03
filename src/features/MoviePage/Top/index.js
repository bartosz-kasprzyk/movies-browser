import { useEffect, useState } from 'react';
import star from '../../../images/star.svg';
import plexa from "../../../images/plexa.png";
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
    Plexa,
    BlackBarWrapper,
    Poster,
    BackdropWrapper
} from './styled';
import { useMovieDetails } from '../useMovieDetails';
import { useScreenWidth } from '../../../common/hooks/useScreenWidth';

const Top = () => {
    const { movieDetails } = useMovieDetails();
    const movie = movieDetails.data;

    const screenWidth = useScreenWidth();
    const dynamicHeight = screenWidth / 1.9232;

    const [imageLoaded, setImageLoaded] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    useEffect(() => {
        const image = new Image();
        image.src = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, [movie.backdrop_path]);

    return (
        <BlackBarWrapper loading="true" dynamicHeight={dynamicHeight}>
            <Wrapper>
                <BackdropWrapper
                    loaded={loaded}
                >
                    <Plexa src={plexa} />
                    {imageLoaded && (
                        <Poster
                            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                            onLoad={handleImageLoad}
                        />
                    )}
                </BackdropWrapper>
                {imageLoaded && (
                    <MainInfo>
                        <MainTitle>{movie?.title}</MainTitle>
                        {movie?.vote_average ? (
                            <Opinion>
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
                        ) : movie.backdrop_path ? (
                            <Opinion>
                                <Votes>No votes yet</Votes>
                            </Opinion>
                        ) : null}
                    </MainInfo>
                )}
            </Wrapper>
        </BlackBarWrapper>
    )
};

export default Top;