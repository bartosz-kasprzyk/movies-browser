import styled, { keyframes } from "styled-components";
import { ReactComponent as Spiner } from "../../images/icon-spinner.svg"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
}
  to {
    transform: rotate(360deg);
}
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const StyledSpiner = styled(Spiner)`
    animation: ${rotate} 1s liner infinite;
    width: 91px;
    height: 91px;

`;