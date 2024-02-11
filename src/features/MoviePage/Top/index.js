import { Wrapper, MainInfo, MainTitle, Opinion, Rating, Ten, Votes, Text, Vector } from './styled';
import star from '../images/star.svg';

const Top = () => (
    <Wrapper>
        <MainInfo>
            <MainTitle>Mulan long title</MainTitle>
            <Opinion>
                <Rating>
                    <Vector src={star} alt="" />
                    <Text>7,8</Text>
                </Rating>
                <Ten>/ 10</Ten>
                <Votes>335 votes</Votes>
            </Opinion>
        </MainInfo>
    </Wrapper>
);

export default Top;