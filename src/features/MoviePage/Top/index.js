import {
    Wrapper,
    MainInfo,
    MainTitle,
    Opinion,
    Rating,
    Ten,
    Votes,
    Text,
    Vector,
    Poster,
    Plexa,
    BlackBar
} from './styled';
import star from '../../../images/star.svg';
import plexa from "../../../images/plexa.png";

const Top = ({ poster, title, rating, votes }) => (
    <BlackBar>
        <Wrapper>
            <Poster src={"https://image.tmdb.org/t/p/original" + poster} />
            <Plexa src={plexa} />
            <MainInfo>
                <MainTitle>{title}</MainTitle>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>{rating.toFixed(1).replace(".", ",")}</Text>
                    </Rating>
                    <Ten>/ 10</Ten>
                    <Votes>{votes.toLocaleString(undefined, {
                        useGrouping: true,
                    })} votes</Votes>
                </Opinion>
            </MainInfo>
        </Wrapper>
    </BlackBar>
);

export default Top;