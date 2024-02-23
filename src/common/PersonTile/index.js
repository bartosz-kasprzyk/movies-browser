import { Description, Grid, StyledImage, StyledSubtitle, StyledTitle, Wrapper } from './styled';

export const PersonTile = ({ image, title, subtitle }) => (
    <Wrapper>
        <Grid>
            <StyledImage src={image} />
            <Description>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubtitle>{subtitle}</StyledSubtitle>
            </Description>
        </Grid>
    </Wrapper>
);