import { useScreenWidth } from '../../../useScreenWidth';
import star from '../../../images/star.svg';
import no_poster from '../../../images/no poster.png';
import {
    Content,
    Description,
    Image,
    Info,
    NoVotes,
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

const Details = ({ image, title, year, production_countries, production, production_short, date, genres, rating, votes, description }) => {
    const screenWidth = useScreenWidth();

    return (
        <Wrapper>
            {image
                ? <Image src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w342" : "w154") + image} />
                : <Image src={no_poster} />
            }
            <Content>
                <Title>{title}</Title>
                <Year>
                    {year
                        ? (new Date(year).getFullYear())
                        : ""
                    }
                </Year>
                <Production>
                    <div>
                        <Info>Production:</Info>
                        {production_countries
                            ? screenWidth > 767
                                ? production
                                : production_short
                            : "Unknown"
                        }
                    </div>
                    <div>
                        <Info>Release date:</Info>
                        {date
                            ? (new Date(date).toLocaleDateString())
                            : "Unknown"
                        }
                    </div>
                </Production>
                <Tags>
                    {genres.map((genre) =>
                        <Tag key={genre}>{genre}</Tag>) || []
                    }
                </Tags>

                {votes
                    ? <Opinion>
                        <Rating>
                            <Vector src={star} alt="" />
                            <Text>{rating.toFixed(1).replace(".", ",")}</Text>
                        </Rating>
                        <Ten>/ 10</Ten>
                        <Votes>
                            {votes.toLocaleString(undefined, {
                                useGrouping: true,
                            })}
                            {votes.toLocaleString() === "1"
                                ? " vote"
                                : " votes"}
                        </Votes>
                    </Opinion>
                    : <Opinion>
                        <NoVotes> No votes yet</NoVotes>
                    </Opinion>
                }

                <Description>{description}</Description>
            </Content>
        </Wrapper>
    );
};

export default Details;