import { toPerson } from '../../routes';
import { Description, Grid, PersonNavLink, StyledImage, StyledSubtitle, StyledTitle } from './styled';
import no_poster from '../../images/profile.png';

export const PersonTile = ({ id, image, title, subtitle }) => {

    return (
        <PersonNavLink to={toPerson({ id })}>
            <Grid>
                {image
                    ? <StyledImage src={"https://image.tmdb.org/t/p/w185" + image} />
                    : <StyledImage src={no_poster} />
                }
                <Description>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledSubtitle>{subtitle}</StyledSubtitle>
                </Description>
            </Grid>
        </PersonNavLink>
    );
}
