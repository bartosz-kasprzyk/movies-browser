import {
    Name,
    PersonalData,
    Description,
    Image,
    Birth,
    Info,
    Tile
} from './styled';
import { useScreenWidth } from '../../../../useScreenWidth';

export const PersonDetailsTile = ({ image, name, date, place, description }) => {
    const screenWidth = useScreenWidth();

    return (
        <Tile>
            <Image src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w500" : "w185") + image} />
            <PersonalData>
                <Name>{name}</Name>
                <Birth>
                    <div><Info>{screenWidth > 767 ? "Date of birth:" : "Birth:"}</Info> {date}</div>
                    <div><Info>Place of birth:</Info> {place}</div>
                </Birth>
            </PersonalData>
            <Description>
                {description}
            </Description>
        </Tile >
    )
};