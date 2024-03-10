import { PersonDetailsTile } from "./Content/PersonDetailsTile";
import { PartOfCast } from "./Content/PartOfCast";
import { PartOfCrew } from "./Content/PartOfCrew";
import { Container } from "../../common/Container";

export const PersonPage = () => (
    <Container>
        <PersonDetailsTile />
        <PartOfCast />
        <PartOfCrew />
    </Container>
);