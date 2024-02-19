import { Row } from '../../common/Tile';
import {
    Content,
    ListTile,
    MainTitle,
    Picture,
    Tag,
    Tags,
    Title,
    Wrapper,
    Year
} from './styled';
import poster from '../MoviePage/images/poster.png';
import empty from '../MoviePage/images/no poster.png';
import { Pagination } from '../../common/Pagination';
import { useScreenWidth } from '../../useScreenWidth';
import Opinion from './Opinion';

const MovieList = () => {
    const screenWidth = useScreenWidth();

    return (
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
                        {screenWidth > 767 ? "" : <Opinion />}
                    </Content>
                    {screenWidth > 767 ? <Opinion /> : ""}
                </ListTile>
                <ListTile>
                    <Picture src={poster} />
                    <Content>
                        <Title>Mulan</Title>
                        <Year>2020</Year>
                        {screenWidth > 767 ? "" : <Opinion />}
                    </Content>
                    {screenWidth > 767 ? <Opinion /> : ""}
                </ListTile>
                <ListTile>
                    <Picture src={empty} />
                    <Content>
                        <Title>Mulan</Title>
                        <Tags>
                            <Tag>Action</Tag>
                        </Tags>
                        {screenWidth > 767 ? "" : <Opinion />}
                    </Content>
                    {screenWidth > 767 ? <Opinion /> : ""}
                </ListTile>
                <ListTile>
                    <Picture src={poster} />
                    <Content>
                        <Title>Mulan long title long title Mulan long title long</Title>
                        <Year>2020</Year>
                        <Tags>
                            <Tag>Action</Tag>
                        </Tags>
                        {screenWidth > 767 ? "" : <Opinion />}
                    </Content>
                    {screenWidth > 767 ? <Opinion /> : ""}
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
                        {screenWidth > 767 ? "" : <Opinion />}
                    </Content>
                    {screenWidth > 767 ? <Opinion /> : ""}
                </ListTile>
                <ListTile>
                    <Picture src={poster} />
                    <Content>
                        <Title>Mulan</Title>
                        <Year>2020</Year>
                        {screenWidth > 767 ? "" : <Opinion />}
                    </Content>
                    {screenWidth > 767 ? <Opinion /> : ""}
                </ListTile>
                <ListTile>
                    <Picture src={poster} />
                    <Content>
                        <Title>Mulan</Title>
                        <Tags>
                            <Tag>Action</Tag>
                        </Tags>
                        {screenWidth > 767 ? "" : <Opinion />}
                    </Content>
                    {screenWidth > 767 ? <Opinion /> : ""}
                </ListTile>
                <ListTile>
                    <Picture src={poster} />
                    <Content>
                        <Title>Mulan long title long title Mulan long title long</Title>
                        <Year>2020</Year>
                        <Tags>
                            <Tag>Action</Tag>
                        </Tags>
                        {screenWidth > 767 ? "" : <Opinion />}
                    </Content>
                    {screenWidth > 767 ? <Opinion /> : ""}
                </ListTile>
            </Row>
            <Pagination />
        </Wrapper>
    )
};

export default MovieList;