import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import ItemList from '../components/Item/ItemList'

const Category = () => {
    const { category } = useParams();

    return (
        <>
            <Banner title={category === "gamer" ? "GAMER" : "OFICINA"} />
            <Container className='my-4'>
                <ItemList category={category} />
            </Container>
        </>
    )
}

export default Category