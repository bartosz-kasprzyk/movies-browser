import star from '../../images/star.svg';
import { useScreenWidth } from '../../useScreenWidth';
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
    production_countries,
    production,
    production_short,
    date,
    genres,
    rating,
    votes,
    description
}) => {
    const screenWidth = useScreenWidth();

    return (
        <Wrapper>
            <Image src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w342" : "w154") + image} />
            <Content>
                <Title>{title}</Title>
                <Year>{(new Date(year).getFullYear())}</Year>
                <Production>
                    <div>
                        <Info>Production: </Info>
                        {(production_countries)
                            ? screenWidth > 767
                                ? (production.join(", "))
                                : (production_short.join(", "))
                            : "Unknown"
                        }
                    </div>
                    <div>
                        <Info>Release date: </Info>
                        {new Date(year).toLocaleDateString(undefined, {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                        })}
                    </div>
                </Production>
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
                        <Text>{rating.toFixed(1).replace(".", ",")}</Text>
                    </Rating>
                    <Ten>/ 10</Ten>
                    <Votes>{votes} votes</Votes>
                </Opinion>
                <Description>{description}</Description>
            </Content>
        </Wrapper>
    )
};