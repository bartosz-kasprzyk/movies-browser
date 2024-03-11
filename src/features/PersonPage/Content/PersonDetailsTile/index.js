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
import { usePersonDetails } from '../../usePersonDetails';

export const PersonDetailsTile = () => {
    const screenWidth = useScreenWidth();
    const { personDetails } = usePersonDetails();
    const person = personDetails.data;

    return (
        <Tile key={person.id}>
            <Image src={"https://image.tmdb.org/t/p/" + (screenWidth > 767 ? "w500" : "w185") + person.profile_path} />
            <PersonalData>
                <Name>{person.name}</Name>
                <Birth>
                    <div><Info>{screenWidth > 767 ? "Date of birth:" : "Birth:"}</Info>{(new Date(person.birthday).toLocaleDateString())}</div>
                    <div><Info>Place of birth:</Info>{person.place_of_birth}</div>
                </Birth>
            </PersonalData>
            <Description>
                {person.biography}
            </Description>
        </Tile >
    )
};