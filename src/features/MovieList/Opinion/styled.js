import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: -4px;
`;

export const Rating = styled.div`
    display: flex;
    gap: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        gap: 8px; 
}
`;

export const Vector = styled.img`
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 16px;
        height: 16px;
}
`;

export const Text = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
        line-height: 16.9px;
}
`;

export const Votes = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        color: ${({ theme }) => theme.color.waterloo};
        font-size: 13px;
        margin: -5.6px;
}
`;