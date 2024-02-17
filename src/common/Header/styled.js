import styled from "styled-components";

export const Background = styled.div`
    background: ${({ theme }) => theme.color.woodsmoke};
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1368px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px;
    margin: 0 auto;
    margin-bottom: 56px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        flex-direction: column;
        padding: 16px;
        margin-bottom: 24px;
    }
`
