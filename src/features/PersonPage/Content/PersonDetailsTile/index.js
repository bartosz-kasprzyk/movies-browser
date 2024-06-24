import { useEffect, useState } from 'react';
import no_poster from '../../../../images/profile.png';
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
import { useScreenWidth } from '../../../../common/hooks/useScreenWidth';
import { usePersonDetails } from '../../usePersonDetails';

export const PersonDetailsTile = () => {
    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    const { personDetails } = usePersonDetails();
    const person = personDetails.data;

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = `https://image.tmdb.org/t/p/${isLargeScreen ? "w500" : "w185"}${person.profile_path}`;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, [person.profile_path, isLargeScreen]);

    return (
        <Tile>
            <>
                {imageLoaded ? (
                    <StyledImage
                        src={`https://image.tmdb.org/t/p/${isLargeScreen ? "w500" : "w185"}${person.profile_path}`}
                        alt=""
                        $loaded={imageLoaded}
                    />
                ) : (
                    <PlaceholderImage
                        src={no_poster}
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