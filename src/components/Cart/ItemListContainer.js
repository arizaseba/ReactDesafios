import React, { useContext } from 'react'
import { Badge, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import CartContext from '../Context/CartContext';

function ItemListContainer() {
    const { cartItems } = useContext(CartContext);

    const listItems = cartItems.map((p, index) =>
        <ListGroup.Item key={index} as="li">
            <div className="row align-items-center">
                <div className="col-2">
                    <img src={p.img[0].src} alt={p.img[0].alt} style={{ width: 90 }} />
                </div>
                <div className="col-5">
                    <h5 className='text-uppercase'>{p.title}</h5>
                    <Form.Text>Color: {p.color}</Form.Text>
                </div>
                <div className="col-2 text-center">
                    <Badge className='p-2' bg="primary">{p.amount > 1 ? p.amount + " unidades" : p.amount + " unidad"}</Badge>
                </div>
                <div className="col-3 text-end">
                    <span className='fs-2 fw-light'>$ {parseInt(p.price * p.amount).toLocaleString()}</span>
                </div>
            </div>
        </ListGroup.Item>
    );

    if (cartItems.length > 0) {
        return (
            <ListGroup variant="flush">{listItems}</ListGroup>
        )
    }
    else {
        return (
            <div className='text-center p-5'>
                <div className='display-5'>Tu carrito está vacío</div>
                <div className='fs-4 text-muted'>¿No sabés qué comprar? ¡Contactanos para asesorarte!</div>
            </div>
        )
    }
}

export default ItemListContainer