import { Tile } from '../../common/Tile';
import { Grid, Heading } from './styled';
import poster from "./poster.png"

export const PersonList = () => (
    <>
        <Heading>Popular People</Heading>
        <Grid>
            <Tile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <Tile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <Tile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <Tile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <Tile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <Tile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
            <Tile
                image={poster}
                title="Liu Yifei"
                subtitle="Mulan" />
        </Grid>
    </>
);