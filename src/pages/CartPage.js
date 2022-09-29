import Cart from '../components/Cart/Cart';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner/Banner';

const CartPage = () => {
    return (
        <>
            <Banner title={"carrito"}/>
            <Container className='my-4'>
                <Cart />
            </Container>
        </>
    )
}

export default CartPage