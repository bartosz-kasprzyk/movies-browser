import {
    Content,
    Description,
    Image,
    Info,
    Opinion,
    Production,
    Rating,
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

export const DetailTile = ({
    image,
    title,
    year,
    infotitle,
    infoSubtitle,
    contentTitle,
    contentSubtitle,
    genres,
    star,
    rating,
    votes,
    description
}) => (
    <Wrapper>
        <Image src={image} />
        <Content>
            <Title>{title}</Title>
            <Year>{year}</Year>
            <Production>
                <div><Info>{infotitle}</Info>{contentTitle}</div>
                <div><Info>{infoSubtitle}</Info>{contentSubtitle}</div>
            </Production>
            <Tags>
                {genres ? genres.map((genre) =>
                    <Tag key={genre}>{genre}</Tag>
                ) : ""}
            </Tags>
            <Opinion>
                <Rating>
                    <Vector src={star} />
                    <Text>{rating}</Text>
                </Rating>
                <Ten>/ 10</Ten>
                <Votes>{votes} votes</Votes>
            </Opinion>
            <Description>{description}</Description>
        </Content>
    </Wrapper>
);