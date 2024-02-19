import { Row } from '../../common/Tile';
import {
    Content,
    ListTile,
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
    Wrapper,
    Year
} from './styled';
import poster from '../MoviePage/images/poster.png';
import empty from '../MoviePage/images/no poster.png';
import star from '../MoviePage/images/star.svg';
import { Pagination } from '../../common/Pagination';

const MovieList = () => (
    <Wrapper>
        <MainTitle>Popular movies</MainTitle>
        <Row>
            <ListTile>
                <Picture src={poster} />
                <Content>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
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
                        <Votes>335 votes</Votes>
                    </Opinion>
                </Content>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Content>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <Opinion>
                        <Rating>
                            <Vector src={star} alt="" />
                            <Text>7,8</Text>
                        </Rating>
                        <Votes>335 votes</Votes>
                    </Opinion>
                </Content>
            </ListTile>
            <ListTile>
                <Picture src={empty} />
                <Content>
                    <Title>Mulan</Title>
                    <Tags>
                        <Tag>Action</Tag>
                    </Tags>
                    <Opinion>
                        <Rating>
                            <Vector src={star} alt="" />
                            <Text>7,8</Text>
                        </Rating>
                        <Votes>335 votes</Votes>
                    </Opinion>
                </Content>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Content>
                    <Title>Mulan long title long title Mulan long title long</Title>
                    <Year>2020</Year>
                    <Tags>
                        <Tag>Action</Tag>
                    </Tags>
                    <Opinion>
                        <Rating>
                            <Vector src={star} alt="" />
                            <Text>7,8</Text>
                        </Rating>
                        <Votes>335 votes</Votes>
                    </Opinion>
                </Content>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Content>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
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
                        <Votes>335 votes</Votes>
                    </Opinion>
                </Content>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Content>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <Opinion>
                        <Rating>
                            <Vector src={star} alt="" />
                            <Text>7,8</Text>
                        </Rating>
                        <Votes>335 votes</Votes>
                    </Opinion>
                </Content>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Content>
                    <Title>Mulan</Title>
                    <Tags>
                        <Tag>Action</Tag>
                    </Tags>
                    <Opinion>
                        <Rating>
                            <Vector src={star} alt="" />
                            <Text>7,8</Text>
                        </Rating>
                        <Votes>335 votes</Votes>
                    </Opinion>
                </Content>
            </ListTile>
            <ListTile>
                <Picture src={poster} />
                <Content>
                    <Title>Mulan long title long title Mulan long title long</Title>
                    <Year>2020</Year>
                    <Tags>
                        <Tag>Action</Tag>
                    </Tags>
                    <Opinion>
                        <Rating>
                            <Vector src={star} alt="" />
                            <Text>7,8</Text>
                        </Rating>
                        <Votes>335 votes</Votes>
                    </Opinion>
                </Content>
            </ListTile>
        </Row>
        <Pagination />
    </Wrapper>
);

export default MovieList;