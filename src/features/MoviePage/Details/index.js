import { useScreenWidth } from '../../../useScreenWidth';
import star from '../../../images/star.svg';
import no_poster from '../../../images/no poster.png';
import {
    Content,
    Description,
    Info,
    NoVotes,
    Opinion,
    PlaceholderImage,
    Production,
    Rating,
    StyledImage,
    Tag,
    Tags,
    Ten,
    Text,
    Title,
    Vector,
    Votes,
    Wrapper,
    Year
} from './styled';
import { useMovieDetails } from '../useMovieDetails';
import { useEffect, useState } from 'react';

const Details = () => {
    const screenWidth = useScreenWidth();
    const { movieDetails } = useMovieDetails();
    const movie = movieDetails.data;

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = "https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w342" : "w154") + movie.poster_path;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, [movie.poster_path, screenWidth]);

    return (
        <Wrapper>
            <>
                {!imageLoaded && (
                    <PlaceholderImage
                        src={no_poster}
                        $loaded={imageLoaded} />
                )}
                {imageLoaded && (
                    <StyledImage
                        src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w342" : "w154") + movie.poster_path}
                        alt=""
                        $loaded={imageLoaded}
                    />
                )}
            </>
            <Content>
                <Title>{movie?.title}</Title>
                <Year>
                    {movie?.release_date
                        ? (new Date(movie.release_date).getFullYear())
                        : null
                    }
                </Year>
                <Production>
                    <div>
                        <Info>Production:</Info>
                        {movie?.production_countries
                            ? screenWidth > 767
                                ? movie.production_countries.map((production) => production.name).join(", ")
                                : movie.production_countries.map((production) => production.iso_3166_1).join(", ")
                            : "Unknown"
                        }
                    </div>
                    <div>
                        <Info>Release date:</Info>
                        {movie?.release_date
                            ? (new Date(movie.release_date).toLocaleDateString())
                            : "Unknown"
                        }
                    </div>
                </Production>
                <Tags>
                    {Array.isArray(movie?.genres) && movie.genres.length > 0
                        ? movie.genres.map((genre) => <Tag key={genre.id}>{genre.name}</Tag>)
                        : null
                    }
                </Tags>
                {movie?.vote_average
                    ? <Opinion>
                        <Rating>
                            <Vector src={star} alt="" />
                            <Text>{movie.vote_average.toFixed(1).replace(".", ",")}</Text>
                        </Rating>
                        <Ten>/ 10</Ten>
                        <Votes>
                            {movie.vote_count?.toLocaleString(undefined, {
                                useGrouping: true,
                            })}
                            {movie.vote_count === 1
                                ? " vote"
                                : " votes"}
                        </Votes>
                    </Opinion>
                    : <Opinion>
                        <NoVotes> No votes yet</NoVotes>
                    </Opinion>
                }
            </Content>
            <Description>{movie?.overview}</Description>
        </Wrapper>
    );
};

export default Details;