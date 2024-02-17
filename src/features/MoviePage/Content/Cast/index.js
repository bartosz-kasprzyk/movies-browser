import { Content, Text, Title, ImageTile, Picture, Character, Name, Role, PersonTile } from './styled';
import { Row } from '../../../../common/Tile';
import first from '../../images/person.png';
import secend from '../../images/person2.png';
import profile from '../../images/profile.png';

const Cast = () => (
    <Content>
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
                    <Picture src={profile} />
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
    </Content>
);

export default Cast;