import { Container } from 'react-bootstrap';
import Banner from '../components/Banner/Banner';
import ItemList from '../components/Item/ItemList';

const Home = () => {
    return (
        <>
            <Banner imgSrc={"banner.png"} imgAlt={"Weracer Banner"} />
            <Container className='my-4'>
                <ItemList />
            </Container>
        </>
    )
}

export default Home