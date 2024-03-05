import { toMovie } from '../../routes';
import { useScreenWidth } from '../../useScreenWidth';
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

export const MovieTile = ({ image, title, role, year, genres, rating, votes }) => {

    return (
        <MovieNavLink to={toMovie()}>
            <Image src={"https://image.tmdb.org/t/p/" + (useScreenWidth > 767 ? "w342/" : "w154/") + image} />
            <Content>
                <Title>{title}</Title>

                <Subtitle>
                    {role
                        ? (year
                            ? { role }(new Date(year).getFullYear())
                            : { role })
                        : new Date(year).getFullYear()
                    }
                </Subtitle>

                <Tags>
                    {genres
                        ? genres.map((genre) =>
                            <Tag key={genre}>{genre}</Tag>)
                        : ""
                    }
                </Tags>

                <Opinion>
                    <Rating>
                        <Vector src={star} />
                        <Text>{rating.toLocaleString(undefined, {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1,
                        })}</Text>
                    </Rating>
                    <Votes>{votes.toLocaleString(undefined, {
                        useGrouping: true,
                    })} votes</Votes>
                </Opinion>
            </Content>
        </MovieNavLink>
    );
}