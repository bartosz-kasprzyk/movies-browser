import { PersonTile } from '../../common/PersonTile';
import { Grid, Heading } from './styled';
import person from "../../images/person.png"

export const PersonList = () => (
    <>
        <Heading>Popular People</Heading>
        <Grid>
            <PersonTile
                image={person}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={person}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={person}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={person}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={person}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={person}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={person}
                title="Liu Yifei"
                subtitle="Mulan" />
        </Grid>
    </>
);