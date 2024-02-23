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

export const MovieTile = ({ image, title, role, year, genres, star, rating, votes }) => (
    <Wrapper>
        <Image src={image} />
        <Content>
            <Title>{title}</Title>
            {role
                ? (year
                    ? <Subtitle>{role} ({year})</Subtitle>
                    : <Subtitle>{role}</Subtitle>)
                : <Subtitle>{year}</Subtitle>}
            <Tags>
                {genres
                    ? (genres.map((genre) => (
                        <Tag key={genre}>{genre}</Tag>
                    )))
                    : ""}
            </Tags>
            <Opinion>
                <Rating>
                    <Vector src={star} />
                    <Text>{rating}</Text>
                </Rating>
                <Votes>{votes} votes</Votes>
            </Opinion>
        </Content>
    </Wrapper>
);