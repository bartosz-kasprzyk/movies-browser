import {
    Title,
    Content,
    Description,
    Image,
    Ten,
    Votes,
    Opinion,
    Text,
    Tag,
    Tags,
    Year,
    Rating,
    Production,
    Info,
    Vector,
    Tile
} from './styled';
import poster from '../../images/poster.png';
import star from '../../images/star.svg';
import { useScreenWidth } from '../../../../useScreenWidth';

const MovieTile = () => {
    const screenWidth = useScreenWidth();

    return (
        <Tile>
            <Image src={poster} alt="" />
            <Content>
                <Title>Mulan</Title>
                <Year>2020</Year>
                <Production>
                    <div><Info>Production:</Info>China, {screenWidth > 767 ? "United States of America" : "USA"}</div>
                    <div><Info>Release date:</Info>24.10.2020</div>
                </Production>
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Drama</Tag>
                </Tags>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Ten>/ 10</Ten>
                    <Votes>335 votes</Votes>
                </Opinion>
                <Description>
                    A young Chinese maiden disguises herself as a male warrior in order to save her father.<br />
                    Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father.
                </Description>
            </Content>
        </Tile>
    )
};

export default MovieTile;