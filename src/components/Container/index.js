import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    max-width: 1368px;
    margin: 56px auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        margin: 40px auto;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        margin: 24px auto;
    }
`