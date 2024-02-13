import { ListTile, Row } from '../../common/Tile';
import {
    Content,
    Description,
    Header,
    Opinion,
    Picture,
    Rating,
    Tag,
    TagMiddle,
    Tags,
    Ten,
    Text,
    Title,
    Vector,
    Votes,
    Year
} from './styled';
import poster from '../MoviePage/images/poster.png';
import star from '../MoviePage/images/star.svg';

const MovieList = () => (
    <Content>
        <Header>Popular movies</Header>
        <Row>
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <Tags>
                        <Tag>Action</Tag>
                        <TagMiddle><Tag>Adventure</Tag></TagMiddle>
                        <Tag>Drama</Tag>
                    </Tags>
                </Description>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Votes>335 votes</Votes>
                </Opinion>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                </Description>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Votes>335 votes</Votes>
                </Opinion>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan</Title>
                    <Tags>
                        <Tag>Action</Tag>
                    </Tags>
                </Description>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Votes>335 votes</Votes>
                </Opinion>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan long title long title Mulan long title long</Title>
                    <Year>2020</Year>
                    <Tags>
                        <Tag>Action</Tag>
                    </Tags>
                </Description>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Votes>335 votes</Votes>
                </Opinion>
            </ListTile>
        </Row>
        <Row>
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <Tags>
                        <Tag>Action</Tag>
                        <TagMiddle><Tag>Adventure</Tag></TagMiddle>
                        <Tag>Drama</Tag>
                    </Tags>
                </Description>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Votes>335 votes</Votes>
                </Opinion>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                </Description>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Votes>335 votes</Votes>
                </Opinion>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan</Title>
                    <Tags>
                        <Tag>Action</Tag>
                    </Tags>
                </Description>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Votes>335 votes</Votes>
                </Opinion>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan long title long title Mulan long title long</Title>
                    <Year>2020</Year>
                    <Tags>
                        <Tag>Action</Tag>
                    </Tags>
                </Description>
                <Opinion>
                    <Rating>
                        <Vector src={star} alt="" />
                        <Text>7,8</Text>
                    </Rating>
                    <Votes>335 votes</Votes>
                </Opinion>
            </ListTile>
        </Row>
    </Content>
);

export default MovieList;