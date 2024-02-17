import { ListTile, Row } from '../../common/Tile';
import {
    Content,
    Description,
    MainTitle,
    Opinion,
    Picture,
    Rating,
    Tag,
    Tags,
    Text,
    Title,
    Vector,
    Votes,
    Year
} from './styled';
import poster from '../MoviePage/images/poster.png';
import empty from '../MoviePage/images/no poster.png';
import star from '../MoviePage/images/star.svg';
import { Pagination } from '../../common/Pagination';

const MovieList = () => (
    <Content>
        <MainTitle>Popular movies</MainTitle>
        <Row>
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <Tags>
                        <Tag>Action</Tag>
                        <Tag>Adventure</Tag>
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
                <Picture src={empty} />
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
            <ListTile>
                <Picture src={poster} />
                <Description>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <Tags>
                        <Tag>Action</Tag>
                        <Tag>Adventure</Tag>
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
        <Pagination />
    </Content>
);

export default MovieList;