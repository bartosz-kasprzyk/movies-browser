import {
    Name,
    PersonalData,
    Description,
    Birth,
    Info,
    Tile,
    PlaceholderImage,
    StyledImage
} from './styled';
import no_poster from '../../../../images/profile.png';
import { useScreenWidth } from '../../../../useScreenWidth';
import { usePersonDetails } from '../../usePersonDetails';
import { useEffect, useState } from 'react';

export const PersonDetailsTile = () => {
    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    const { personDetails } = usePersonDetails();
    const person = personDetails.data;

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = "https://image.tmdb.org/t/p/" + (isLargeScreen ? "w500" : "w185") + person.profile_path;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, [person.profile_path, screenWidth]);

    return (
        <Tile>
            <>
                {!imageLoaded && (
                    <PlaceholderImage
                        src={no_poster}
                        $loaded={imageLoaded} />
                )}
                {imageLoaded && (
                    <StyledImage
                        src={"https://image.tmdb.org/t/p/" + (isLargeScreen ? "w500" : "w185") + person.profile_path}
                        alt=""
                        $loaded={imageLoaded}
                    />
                )}
            </>
            <PersonalData>
                <Name>{person.name}</Name>
                <Birth>
                    <div>
                        <Info>
                            {isLargeScreen ? "Date of birth: " : "Birth: "}
                        </Info>
                        {person.birthday
                            ? (new Date(person.birthday)).toLocaleDateString()
                            : "Unknown"
                        }
                    </div>
                    <div>
                        <Info>Place of birth: </Info>
                        {person.place_of_birth
                            ? person.place_of_birth
                            : "Unknown"
                        }
                    </div>
                </Birth>
            </PersonalData>
            <Description>
                {person.biography}
            </Description>
        </Tile >
    )
};