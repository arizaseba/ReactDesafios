import { Container } from 'react-bootstrap';
import ItemList from '../components/Products/ItemList';

const Home = () => {
    return (
        <>
            <img src="banner.png" alt="Banner Weracer" style={{ height: 300, width: "100%", objectFit: 'cover' }} />
            <Container className='my-4'>
                <ItemList />
            </Container>
        </>
    )
}

export default Home