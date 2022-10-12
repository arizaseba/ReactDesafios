import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { getOrderById } from "../app/dbBuyer";
import CartContext from "../Context/CartContext";

const Checkout = () => {
    const { id } = useParams();
    const { clearCart } = useContext(CartContext);
    const [order, setOrder] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getOrderById(id).then(data => {
            setOrder(data);
            setIsLoading(false);
        });

    }, [id])

    if (isLoading) {
        return (
            <Container className='d-flex align-items-center justify-content-center' style={{ height: 500 }}>
                <PulseLoader color="#202020" />
            </Container>
        );
    }
    else if (order) {
        clearCart();
        return (
            <Container className="d-flex flex-column align-items-center text-center p-5">
                <h1>{order.name}</h1>
                <p className="text-muted">¡Su compra fue realizada exitosamente!</p>
                <hr></hr>
                <div>El identificador de su compra es:</div>
                <p className="fs-3 fw-bold">{id}</p>
                <div>En un momento recibirá la factura por correo:</div>
                <div className="fs-3 fw-bold">{order.email}</div>
            </Container>
        )
    }
}

export default Checkout