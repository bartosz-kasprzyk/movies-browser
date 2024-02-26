import { Title, PersonNavLink, Row } from './styled';
import first from '../../../images/person.png';
import secend from '../../../images/person2.png';
import { PersonTile } from '../../../common/PersonTile';

const Cast = () => (
    <>
        <Title>Crew</Title>
        <Row>
            <PersonNavLink to="/person">
                <PersonTile
                    image={first}
                    title="Liu Yifei"
                    subtitle="Mulan" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={secend}
                    title="Donnie Yen"
                    subtitle="Komandor Tung" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={first}
                    title="Jason Scott Lee"
                    subtitle="Böri Khan" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={first}
                    title="Jet Li"
                    subtitle="Böri Khan" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={first}
                    title="Liu Yifei"
                    subtitle="Mulan" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={first}
                    title="Liu Yifei"
                    subtitle="Mulan" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={profile}
                    title="Liu Yifei"
                    subtitle="Mulan" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={first}
                    title="Liu Yifei"
                    subtitle="Mulan" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={first}
                    title="Liu Yifei"
                    subtitle="Mulan" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={first}
                    title="Liu Yifei"
                    subtitle="Mulan" />
            </PersonNavLink>
        </Row>
    </>
);

export default Cast;