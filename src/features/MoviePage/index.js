import Top from './Top';
import Cast from './Cast';
import Crew from './Crew';
import { useScreenWidth } from '../../useScreenWidth';
import { DetailTile } from '../../common/DetailTile';
import poster from '../../images/poster.png';
import star from '../../images/star.svg';
import { Container } from '../../common/Container';

const MoviePage = () => {
    const screenWidth = useScreenWidth();

    return (
        <>
            <Top />
            <Container>
                <DetailTile
                    image={poster}
                    title="Mulan"
                    year="2020"
                    infotitle="Production:"
                    infoSubtitle="Release date:"
                    contentTitle={screenWidth > 767 ? "China, United States of America" : "China, USA"}
                    contentSubtitle="24.10.2020"
                    genres={["Action", "Adventure", "Drama"]}
                    star={star}
                    rating="7,8"
                    votes="335"
                    description="A young Chinese maiden disguises herself as a male warrior in order to save her father.
                    Disguises herself as a male warrior in order to save her father. 
                    A young Chinese maiden disguises herself as a male warrior in order to save her father."
                />
                <Cast />
                <Crew />
            </Container>
        </>
    )
};

export default MoviePage;