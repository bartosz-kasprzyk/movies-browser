
import star from '../../MoviePage/images/star.svg';
import { Rating, Text, Vector, Votes, Wrapper } from "./styled";

const Opinion = () => (
    <Wrapper>
        <Rating>
            <Vector src={star} alt="star" />
            <Text>7,8</Text>
        </Rating>
        <Votes>335 votes</Votes>
    </Wrapper>
);

export default Opinion;