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
    Wrapper,
    Subtitle
} from './styled';
import star from '../../images/star.svg';
import { useScreenWidth } from '../../useScreenWidth';

export const MovieTile = ({ image, title, role, year, genres, rating, votes }) => {
    const screenWidth = useScreenWidth();

    return (
        <Wrapper>
            <Image src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w342/" : "w154/") + image} />
            <Content>
                <Title>{title}</Title>

                <Subtitle>
                    {role
                        ? (year
                            ? { role } + "(" + (new Date(year).getFullYear()) + ")"
                            : { role })
                        : (new Date(year).getFullYear())
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
                        <Text>{rating.toLocaleString()}</Text>
                    </Rating>
                    <Votes>{votes} votes</Votes>
                </Opinion>
            </Content>
        </Wrapper>
    )
};