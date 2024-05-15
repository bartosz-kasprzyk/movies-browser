import { toPerson } from '../../routes';
import { Description, Grid, PersonNavLink, PlaceholderImage, StyledImage, StyledSubtitle, StyledTitle } from './styled';
import no_poster from '../../images/profile.png';
import { useEffect, useState } from 'react';

export const PersonTile = ({ id, image_path, title, subtitle }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = "https://image.tmdb.org/t/p/w185" + image_path;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, [image_path]);

    return (
        <PersonNavLink to={toPerson({ id })}>
            <Grid>
                <>
                    {!imageLoaded && (
                        <PlaceholderImage
                            src={no_poster}
                            $loaded={imageLoaded} />
                    )}
                    {imageLoaded && (
                        <StyledImage
                            src={"https://image.tmdb.org/t/p/w185" + image_path}
                            alt=""
                            $loaded={imageLoaded}
                        />
                    )}
                </>
                <Description>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledSubtitle>{subtitle}</StyledSubtitle>
                </Description>
            </Grid>
        </PersonNavLink>
    );
}
