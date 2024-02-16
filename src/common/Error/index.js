import { Button, ErrorMasege, Recomendation, StyledDanger, Warning } from "./styled";

const Error = () => {
    return (
        <ErrorMasege>
            <StyledDanger />
            <Warning>Ooops! Something went wrong... </Warning>
            <Recomendation>Please check your network connection and try again</Recomendation>
            <Button>Back to home page</Button>
        </ErrorMasege>);
};

export default Error;