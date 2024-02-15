import { Content, Text, Title, ImageTile, Picture, Character, Name, Role } from './styled';
import { Row, PersonTile } from '../../../../components/Tile';
import first from '../../images/person.png';
import secend from '../../images/person2.png';

const Crew = () => (
    <Content>
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
    </Content>
);

export default Crew;