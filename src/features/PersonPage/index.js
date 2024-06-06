import { PersonDetailsTile } from "./Content/PersonDetailsTile";
import { PartOfCast } from "./Content/PartOfCast";
import { PartOfCrew } from "./Content/PartOfCrew";
import { Container } from "../../common/Container";
import { usePersonCredits } from "./usePersonCredits";
import { usePersonDetails } from "./usePersonDetails";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

export const PersonPage = () => {
    const { personCredits } = usePersonCredits();
    const { personDetails } = usePersonDetails();
    const { loading } = usePersonDetails();

    return (
        <>
            {loading === true ? (
                <Loading />
            )
                : personCredits.status === "error" || personDetails.status === "error" ? (
                    <Error />
                )
                    : (
                        <main>
                            <Container>
                                <PersonDetailsTile />
                                <PartOfCast />
                                <PartOfCrew />
                            </Container>
                        </main>
                    )
            }
        </>
    )
};