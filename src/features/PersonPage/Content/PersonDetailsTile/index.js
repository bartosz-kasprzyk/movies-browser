import {
    Name,
    PersonalData,
    Description,
    Image,
    Birth,
    Info,
    Tile
} from './styled';
import no_poster from '../../../../images/profile.png';
import { useScreenWidth } from '../../../../useScreenWidth';

export const PersonDetailsTile = ({ image, name, date, place, description }) => {
    const screenWidth = useScreenWidth();

    return (
        <Tile>
            {image
                ? <Image src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w500" : "w185") + image} />
                : <Image src={no_poster} />
            }
            <PersonalData>
                <Name>{name}</Name>
                <Birth>
                    <div>
                        <Info>
                            {screenWidth > 767 ? "Date of birth:" : "Birth:"}
                        </Info>
                        {date
                            ? (new Date(date)).toLocaleDateString()
                            : "Unknown"
                        }
                    </div>
                    <div>
                        <Info>Place of birth:</Info>
                        {place
                            ? place
                            : "Unknown"
                        }
                    </div>
                </Birth>
            </PersonalData>
            <Description>
                {description}
            </Description>
        </Tile >
    )
};