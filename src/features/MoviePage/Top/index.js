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
    Poster
} from './styled';
import star from '../../images/star.svg';

const Top = () => (
    <Wrapper>
        <Poster>
            <MainInfo>
                <MainTitle>Mulan longer title</MainTitle>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Ten>/ 10</Ten>
                    <Votes>335 votes</Votes>
                </Opinion>
            </MainInfo>
        </Poster>
    </Wrapper>
);

export default Top;