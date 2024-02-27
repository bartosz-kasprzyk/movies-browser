import { PersonTile } from '../../common/PersonTile';
import {Pagination} from '../../common/Pagination';
import { Grid, Heading, PersonNavLink } from './styled';
import person from "../../images/person.png"

export const PersonList = () => (
    <>
        <Heading>Popular people</Heading>
        <Grid>
            <PersonNavLink to="/person">
                <PersonTile
                    image={person}
                    title="Liu Yifei" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={person}
                    title="Liu Yifei" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={person}
                    title="Liu Yifei" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={person}
                    title="Liu Yifei" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={person}
                    title="Liu Yifei" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={person}
                    title="Liu Yifei" />
            </PersonNavLink>
            <PersonNavLink to="/person">
                <PersonTile
                    image={person}
                    title="Liu Yifei" />
            </PersonNavLink>
        </Grid>
        <Pagination />
    </>
);