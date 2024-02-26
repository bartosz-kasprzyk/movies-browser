import { PersonTile } from '../../common/PersonTile';
import { Grid, Heading } from './styled';
import poster from "./poster.png"

export const PersonList = () => (
    <>
        <Heading>Popular People</Heading>
        <Grid>
            <PersonTile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <PersonTile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
        </Grid>
    </>
);