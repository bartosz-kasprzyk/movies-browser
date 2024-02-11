import { useScreenWidth } from "./useScreenWidth";
import {
    Wrapper,
    Left,
    Right,
    ButtonSection,
    ButtonTile,
    ButtonText,
    CounterWrapper,
    CounterText,
    CounterNumber
} from "./styled";

export const Pagination = () => {
    const screenWidth = useScreenWidth();

    return (
        <Wrapper>
            <ButtonSection>
                <ButtonTile disabled>
                    {screenWidth > 767 ? <Left /> : <><Left /><Left /></>}
                    <ButtonText>
                        First
                    </ButtonText>
                </ButtonTile>

                <ButtonTile disabled>
                    <Left />
                    <ButtonText>
                        Previous
                    </ButtonText>
                </ButtonTile>
            </ButtonSection>

            <CounterWrapper>
                <CounterText>Page</CounterText>
                <CounterNumber>1</CounterNumber>
                <CounterText>of</CounterText>
                <CounterNumber>500</CounterNumber>
            </CounterWrapper>

            <ButtonSection>
                <ButtonTile>
                    <ButtonText>
                        Next
                    </ButtonText>
                    <Right />
                </ButtonTile>

                <ButtonTile>
                    <ButtonText>
                        Last
                    </ButtonText>
                    {screenWidth > 767 ? <Right /> : <><Right /><Right /></>}
                </ButtonTile>
            </ButtonSection>
        </Wrapper>
    )
};