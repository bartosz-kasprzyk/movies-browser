import { useScreenWidth } from '../../useScreenWidth';
import { Description, Grid, StyledImage, StyledSubtitle, StyledTitle, Wrapper } from './styled';
import no_poster from "../../images/no poster.png"

export const PersonTile = ({ image, title, subtitle }) => {
    const screenWidth = useScreenWidth();

    return (
        <Wrapper>
            <Grid>
                {image
                    ? <StyledImage src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w342" : "w154") + image} />
                    : <StyledImage src={no_poster} />
                }
                <Description>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledSubtitle>{subtitle}</StyledSubtitle>
                </Description>
            </Grid>
        </Wrapper>
    )
};