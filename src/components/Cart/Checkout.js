import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOrderById } from "../app/dbBuyer";

const Checkout = () => {
    // parametros
    const { id } = useParams();

    const [order, setOrder] = useState()

    useEffect(() => {
        getOrderById(id).then(data => {
            setOrder(data);
        });

    }, [id])

    if (order) {
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