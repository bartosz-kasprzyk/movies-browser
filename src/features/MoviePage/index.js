import { Content, Description, Element, Image, Item, Opinion, Text, Tag, Tags, Title, Year, Rating, Shape, Production, Info, Cast, CastRow } from './styled';
import poster from './images/poster.png';
import star from './images/star.svg';
import { Tile, PersonTile } from '../../components/Tile';

const MoviePage = () => (
    <>
        <Tile>
            <Image src={poster} alt="" />
            <Content>
                <Title>Mulan</Title>
                <Year>2020</Year>
                <Production>
                    <Info>Production:</Info>
                    <>China, United States of America</>
                    <div><Info>Release date:</Info>24.10.2020</div>
                </Production>
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Drama</Tag>
                </Tags>
                <Opinion>
                    <Rating>
                        <Shape>
                            <Element src={star} />
                        </Shape>
                        <Text>7,8</Text>
                    </Rating>
                    <Item>/ 10</Item>
                    <Item>335 votes</Item>
                </Opinion>
                <Description>
                    A young Chinese maiden disguises herself as a male warrior in order to save her father.
                    Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
                </Description>
            </Content>
        </Tile>
        <Cast>
            <Title>
                Cast
            </Title>
            <CastRow>
                <PersonTile></PersonTile>
                <PersonTile></PersonTile>
                <PersonTile></PersonTile>
                <PersonTile></PersonTile>
                <PersonTile></PersonTile>
                <PersonTile></PersonTile>
            </CastRow>
        </Cast>
    </>
);

export default MoviePage;