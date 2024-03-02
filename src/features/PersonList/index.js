import { PersonTile } from '../../common/PersonTile';
import { Pagination } from '../../common/Pagination';
import { Grid, Heading } from './styled';
import person from "../../images/person.png"

export const PersonList = () => (
    <>
        <Heading>Popular people</Heading>
        <Grid>

            <PersonTile
                image={person}
                title="Liu Yifei" />
            <PersonTile
                image={person}
                title="Liu Yifei" />
            <PersonTile
                image={person}
                title="Liu Yifei" />
            <PersonTile
                image={person}
                title="Liu Yifei" />
            <PersonTile
                image={person}
                title="Liu Yifei" />
            <PersonTile
                image={person}
                title="Liu Yifei" />
            <PersonTile
                image={person}
                title="Liu Yifei" />
        </Grid>
        <Pagination />
    </>
);