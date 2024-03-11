import { PersonDetailsTile } from "./Content/PersonDetailsTile";
import { PartOfCast } from "./Content/PartOfCast";
import { PartOfCrew } from "./Content/PartOfCrew";
import { usePersonDetails } from "./usePersonDetails";
import { Container } from "../../common/Container";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

export const PersonPage = () => {
    const { personDetails } = usePersonDetails();
    const person = personDetails?.data;

    return (
        <>
            {personDetails.status === "loading" ? (
                <Loading />
            )
                : personDetails.status === "error" ? (
                    <Error />
                )
                    : (
                        <Container>
                            <PersonDetailsTile
                                key={person.id}
                                image={person.profile_path}
                                name={person.name}
                                date={person.birthday}
                                place={person.place_of_birth}
                                description={person.biography}
                            />
                            <PartOfCast />
                            <PartOfCrew />
                        </Container>
                    )
            }
        </>
    )
};
