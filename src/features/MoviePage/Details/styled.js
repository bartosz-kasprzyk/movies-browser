import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    min-height: 544px;
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        min-height: 292px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 16px;
        gap: 16px;
    }
`;

export const PlaceholderImage = styled.img`
    max-width: 312px;
    max-height: 464px;
    margin: 0 40px 30px 0;
    float: left;
    border-radius: 5px;
    display: ${({ $loaded }) => ($loaded ? 'none' : 'block')};

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        max-width: 114px;
        max-height: 169px;
        margin: 0;
    }
`;

export const StyledImage = styled.img`
    max-width: 312px;
    max-height: 464px;
    margin: 0 40px 30px 0;
    float: left;
    border-radius: 5px;
    opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        max-width: 114px;
        max-height: 169px;
        margin: 0;
    }
`;

export const Content = styled.div`
    flex-grow: 1;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: calc(100% - 152px);
    }
`;

export const Title = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.xl6};
    margin: 12px 0 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin: 9px 0 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        font-size: ${({ theme }) => theme.fontSize.lg};
        margin: 2px 0 10px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        margin: 2px 0 8px;
    }
`;

export const Year = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl3};
    margin-bottom: 24px;  
    
    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-bottom: 16px;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        color: ${({ theme }) => theme.color.waterloo};
        font-size: ${({ theme }) => theme.fontSize.sm};
        margin-bottom: 8px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        margin-bottom: 2px;
    }
`;

export const Production = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 22px;
    }
`;

export const Info = styled.span`
    color: ${({ theme }) => theme.color.stormGrey};
    margin: 0 8px 6px 0;
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        line-height: 22px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        display: none;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-top: 20px;
    gap: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        gap: 8px;
        margin-top: 12px;
        margin-bottom: 26px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        margin-top: 4px;
        margin-bottom: 18px;
    }
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 8px 16px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.xs};
        padding: 4px 8px;
    }
`;

export const Opinion = styled.span`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 8px -8px 12px;
`;

export const Rating = styled.div`
    display: flex;
    gap: 8px;
    width: 64px;
    height: 29px;
    margin: 9px 8px 3px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        flex-wrap: wrap;
        gap: 8px;
        margin: -12.4px 8px -4px;
    }
`;

export const Vector = styled.img`
    margin: 2.5px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 16px;
        height: 16px;
    }
`;

export const Text = styled.span`
    font-size: ${({ theme }) => theme.fontSize.xl3};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 24.6px;
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
`;

export const Ten = styled.span`
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 37px;
    margin: 9px 4px 3px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        display: none;
    }
`;

export const Votes = styled.span`
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 37px;
    margin: 9px 12px 3px 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        color: ${({ theme }) => theme.color.waterloo};  
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 0;
        margin: 0 -2px 0 -22px;
    }
`;

export const NoVotes = styled.span`
    color: ${({ theme }) => theme.color.waterloo}; 
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 37px;
    margin: 9px 12px 3px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 0;
        margin-left: 8px;
    }
`;

export const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl2};
    line-height: 32px;
    margin-top: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.xl};
        line-height: 27px;
        margin-top: 8px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.md};
        line-height: 22px;
        margin-top: -10px;
    }
`;