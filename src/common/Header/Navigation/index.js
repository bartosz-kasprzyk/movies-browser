import { LogoIcon, LogoText, LogoWrapper, NavSection, StyledNavLink, StyledNavigation } from "./styled";

export const Navigation = () => (
    <StyledNavigation>
        <LogoWrapper>
            <LogoIcon />
            <LogoText>Movies Browser</LogoText>
        </LogoWrapper>
        <NavSection>
            <li><StyledNavLink to="/movies">MOVIES</StyledNavLink></li>
            <li><StyledNavLink to="/people">PEOPLE</StyledNavLink></li>
        </NavSection>
    </StyledNavigation>
);