import { Title, Row } from './styled';
import first from '../../../images/person.png';
import secend from '../../../images/person2.png';
import profile from '../../../images/profile.png';
import { PersonTile } from '../../../common/PersonTile';

const Cast = () => (
    <>
        <Title>Crew</Title>
        <Row>
            <PersonTile
                image={first}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={secend}
                title="Donnie Yen"
                subtitle="Komandor Tung" />
            <PersonTile
                image={first}
                title="Jason Scott Lee"
                subtitle="Böri Khan" />
            <PersonTile
                image={first}
                title="Jet Li"
                subtitle="Böri Khan" />
            <PersonTile
                image={first}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={first}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={profile}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={first}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={first}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={first}
                title="Liu Yifei"
                subtitle="Mulan" />
        </Row>
    </>
);

export default Cast;