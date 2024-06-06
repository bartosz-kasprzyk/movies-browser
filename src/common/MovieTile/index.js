import {
    Content,
    Opinion,
    Rating,
    Tag,
    Tags,
    Text,
    Title,
    Vector,
    Votes,
    Subtitle,
    MovieNavLink,
    NoVotes,
    PlaceholderImage,
    StyledImage
} from './styled';
import star from '../../images/star.svg';
import no_poster from '../../images/no poster.png'
import { useScreenWidth } from '../hooks/useScreenWidth';
import { toMovie } from '../config/routes';
import { useEffect, useState } from 'react';

export const MovieTile = ({ id, image_path, title, role, year, genres, rating, votes }) => {
    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = `https://image.tmdb.org/t/p/${isLargeScreen ? "w342" : "w154"}${image_path}`;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, [image_path, isLargeScreen]);

    return (
        <MovieNavLink to={toMovie({ id })}>
            <>
                {!imageLoaded && (
                    <PlaceholderImage
                        src={no_poster}
                        $loaded={imageLoaded} />
                )}
                {imageLoaded && (
                    <StyledImage
                        src={`https://image.tmdb.org/t/p/${isLargeScreen ? "w342" : "w154"}${image_path}`}
                        alt=""
                        $loaded={imageLoaded}
                    />
                )}
            </>
            <Content>
                <Title>{title}</Title>

                <Subtitle>
                    {role
                        ? (year
                            ? `${role} (${new Date(year).getFullYear()})`
                            : role)
                        : (year
                            ? (new Date(year).getFullYear())
                            : "")
                    }
                </Subtitle>

                <Tags>
                    {genres
                        ? genres.map((genre) =>
                            <Tag key={genre}>{genre}</Tag>)
                        : ""
                    }
                </Tags>

                {votes
                    ? <Opinion>
                        <Rating>
                            <Vector src={star} />
                            <Text>{rating.toFixed(1).replace(".", ",")}</Text>
                        </Rating>
                        <Votes>
                            {votes.toLocaleString(undefined, {
                                useGrouping: true,
                            })}
                            {votes === 1
                                ? " vote"
                                : " votes"}
                        </Votes>
                    </Opinion>
                    : <Opinion>
                        <NoVotes>No votes yet</NoVotes>
                    </Opinion>
                }

            </Content>
        </MovieNavLink>
    )
};