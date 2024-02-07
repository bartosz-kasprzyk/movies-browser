import { Content, Description, Element, Image, Item, Opinion, Text, Tag, Tags, Title, Year, Rating, Shape, Production, Info, Cast, ImageTile, Picture, Character, Name, Role, Crew } from './styled';
import poster from './images/poster.png';
import star from './images/star.svg';
import first from './images/1.png';
import secend from './images/2.png';
import { Tile, Row, PersonTile } from '../../components/Tile';

const MoviePage = () => (
    <>
        <Tile>
            <Image src={poster} alt="" />
            <Content>
                <Title>Mulan</Title>
                <Year>2020</Year>
                <Production>
                    <div><Info>Production:</Info>China, United States of America</div>
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
                            <Element src={star} alt="" />
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
            <Title>Cast</Title>
            <Row>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={secend} />
                        <Character>
                            <Name>
                                <Text>Donnie Yen</Text>
                                <Role>Komandor Tung</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Jason Scott Lee</Text>
                                <Role>Böri Khan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Jet Li</Text>
                                <Role>Böri Khan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
            </Row>
            <Row>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
            </Row>
        </Cast>
        <Crew>
            <Title>Crew</Title>
            <Row>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={secend} />
                        <Character>
                            <Name>
                                <Text>Donnie Yen</Text>
                                <Role>Komandor Tung</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Jason Scott Lee</Text>
                                <Role>Böri Khan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Jet Li</Text>
                                <Role>Böri Khan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
                <PersonTile>
                    <ImageTile>
                        <Picture src={first} />
                        <Character>
                            <Name>
                                <Text>Liu Yifei</Text>
                                <Role>Mulan</Role>
                            </Name>
                        </Character>
                    </ImageTile>
                </PersonTile>
            </Row>
        </Crew>
    </>
);

export default MoviePage;