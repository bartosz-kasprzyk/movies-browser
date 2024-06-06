import styled from "styled-components";
import { ReactComponent as Search } from "./Search.svg";

export const Wrapper = styled.section`
    width: 432px;
    height: 48px;
    display: flex;
    gap: 16px;
    align-items: center;
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.mystic};
    border-radius: 50px;
    padding: 0 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        width: 100%;
        height: 46px;
        margin-top: 20px;
        padding: 0 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        height: 44px;
        margin-top: 16px;
        padding: 0 16px;
    }
`;

export const SearchIcon = styled(Search)`
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        width: 20px;
        height: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 16px;
        height: 16px;
    }
`;

export const SearchInput = styled.input`
    flex-grow: 1;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: 24px;
    border: none;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        font-size: 14.5px;
        line-height: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 17px;
    }

    &::placeholder {
        color: ${({ theme }) => theme.color.waterloo};
    }
`;