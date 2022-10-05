import { Container } from "react-bootstrap"
import Checkout from "../components/Cart/Checkout"

const CheckoutPage = () => {
    return (
        <>
            <Container className='my-4'>
                <Checkout />
            </Container>
        </>
    )
}

export default CheckoutPage