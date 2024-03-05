import { useScreenWidth } from '../../../useScreenWidth';
import star from '../../../images/star.svg';
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
import { useMovieDetails } from '../useMovieDetails';

const Details = () => {
    const screenWidth = useScreenWidth();
    const { movieDetails } = useMovieDetails();
    const movie = movieDetails.data;

    return (
        <>
            {movieDetails.status === "success" ? (
                <Wrapper>
                    <Image src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w342" : "w154") + movie.poster_path} />
                    <Content>
                        <Title>{movie.title}</Title>
                        <Year>{(new Date(movie.release_date).getFullYear())}</Year>
                        <Production>
                            <div><Info>Production:</Info>{screenWidth > 767 ? "United States of America" : "USA"}</div>
                            <div><Info>Release date:</Info>{(new Date(movie.release_date).toLocaleDateString())}</div>
                        </Production>
                        <Tags>
                            {movie.genres.map((genre) =>
                                <Tag key={genre}>{genre.name}</Tag>) || []
                            }
                        </Tags>
                        <Opinion>
                            <Rating>
                                <Vector src={star} />
                                <Text>{movie.vote_average.toLocaleString(undefined, {
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 1,
                                })}</Text>
                            </Rating>
                            <Ten>/ 10</Ten>
                            <Votes>{movie.vote_count.toLocaleString('pl-PL', {
                                useGrouping: true,
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })} votes</Votes>
                        </Opinion>
                        <Description>{movie.overview}</Description>
                    </Content>
                </Wrapper>
            ) : null}
        </>
    );
};

export default Details;