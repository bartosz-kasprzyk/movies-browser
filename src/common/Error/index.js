import { toMovies } from "../config/routes";
import { Button, ErrorMessage, Recommendation, StyledDanger, Warning } from "./styled";

const Error = () => {
    return (
        <ErrorMessage>
            <StyledDanger />
            <Warning>Ooops! Something went wrong... </Warning>
            <Recommendation>Please check your network connection <br /> and try again</Recommendation>
            <Button to={toMovies()}>Back to home page</Button>
        </ErrorMessage>);
};

export default Error;