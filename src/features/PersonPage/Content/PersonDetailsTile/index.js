import {
    Name,
    PersonalData,
    Description,
    Image,
    Birth,
    Info,
    Tile
} from './styled';
import person from '../../../../images/person.png';
import { useScreenWidth } from '../../../../useScreenWidth';

export const PersonDetailsTile = () => {
    const screenWidth = useScreenWidth();

    return (
        <Tile>
            <Image src={person} alt="" />
            <PersonalData>
                <Name>Liu Yifei</Name>
                <Birth>
                    <div><Info>{screenWidth > 767 ? "Date of birth:" : "Birth:"}</Info> 25.08.1987</div>
                    <div><Info>Place of birth:</Info> Wuhan, Hubei, China</div>
                </Birth>
            </PersonalData>
            <Description>
                Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.
            </Description>
        </Tile>
    )
};