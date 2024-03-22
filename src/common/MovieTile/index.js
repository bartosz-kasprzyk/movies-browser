import {
    Content,
    Image,
    Opinion,
    Rating,
    Tag,
    Tags,
    Text,
    Title,
    Vector,
    Votes,
    Subtitle,
    MovieNavLink
} from './styled';
import star from '../../images/star.svg';
import no_poster from '../../images/no poster.png'
import { useScreenWidth } from '../../useScreenWidth';
import { toMovie } from '../../routes';

export const MovieTile = ({ id, image, title, role, year, genres, rating, votes }) => {
    const screenWidth = useScreenWidth();

    return (
        <MovieNavLink to={toMovie({ id })}>
            {image
                ? <Image src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w342" : "w154") + image} />
                : <Image src={no_poster} />
            }
            <Content>
                <Title>{title}</Title>

                <Subtitle>
                    {role
                        ? (year
                            ? (role + " (" + (new Date(year).getFullYear()) + ")")
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
                            {votes > 1
                                ? " votes"
                                : " vote"}
                        </Votes>
                    </Opinion>
                    : <Opinion>
                        <Votes>No votes yet</Votes>
                    </Opinion>
                }

            </Content>
        </MovieNavLink>
    )
};