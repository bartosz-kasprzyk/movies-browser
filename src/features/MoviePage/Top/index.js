import { Wrapper, MainInfo, MainTitle, Opinion, Rating, Item, Text, Vector } from './styled';
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
                <Item>/ 10</Item>
                <Item>335 votes</Item>
            </Opinion>
        </MainInfo>
    </Wrapper>
);

export default Top;