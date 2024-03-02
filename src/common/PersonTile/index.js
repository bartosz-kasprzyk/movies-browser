import { toPerson } from '../../routes';
import { Description, Grid, PersonNavLink, StyledImage, StyledSubtitle, StyledTitle, Wrapper } from './styled';

export const PersonTile = ({ image, title, subtitle }) => {

    return (
        <Wrapper>
            <PersonNavLink to={toPerson()}>
                <Grid>
                    <StyledImage src={image} />
                    <Description>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledSubtitle>{subtitle}</StyledSubtitle>
                    </Description>
                </Grid>
            </PersonNavLink>
        </Wrapper>
    );
}