import { Content, Text, Title, Picture, Role } from './styled';
import { Row, PersonTile } from '../../../../common/Tile';
import first from '../../images/person.png';
import secend from '../../images/person2.png';

const Crew = () => (
    <Content>
        <Title>Crew</Title>
        <Row>
            <PersonTile>
                <Picture src={first} />
                <Text>Liu Yifei</Text>
                <Role>Mulan</Role>
            </PersonTile>
            <PersonTile>
                <Picture src={secend} />
                <Text>Donnie Yen</Text>
                <Role>Komandor Tung</Role>
            </PersonTile>
            <PersonTile>
                <Picture src={first} />
                <Text>Jason Scott Lee</Text>
                <Role>Böri Khan</Role>
            </PersonTile>
            <PersonTile>
                <Picture src={first} />
                <Text>Jet Li</Text>
                <Role>Böri Khan</Role>
            </PersonTile>
            <PersonTile>
                <Picture src={first} />
                <Text>Liu Yifei</Text>
                <Role>Mulan</Role>
            </PersonTile>
            <PersonTile>
                <Picture src={first} />
                <Text>Liu Yifei</Text>
                <Role>Mulan</Role>
            </PersonTile>
        </Row>
    </Content>
);

export default Crew;