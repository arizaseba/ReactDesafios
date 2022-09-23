import React from 'react'
import { Badge, Button, Form, ListGroup } from 'react-bootstrap';

function ItemListContainer({ cartList }) {
    const listItems = cartList.map((p, index) =>
        <ListGroup.Item key={index} as="li" className="d-flex justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
                <img src={p.img[0].src} alt={p.img[0].alt} style={{ width: 90 }} />
                <div>
                    <h5 className='text-uppercase'>{p.title}</h5>
                    <Form.Text>Color: {p.color}</Form.Text>
                </div>
            </div>
            <Badge className='p-2' bg="primary">{p.cantidad > 1 ? p.cantidad + " unidades" : p.cantidad + " unidad"}</Badge>
            <p className='fs-2 fw-light'>$ {parseInt(p.price * p.cantidad).toLocaleString()}</p>
        </ListGroup.Item>
    );

    if (cartList.length > 0) {
        return (
            <ListGroup variant="flush">{listItems}</ListGroup>
        )
    }
    else {
        return (
            <div className='d-flex flex-column align-items-center'>
                <div className='display-4'>Tu carrito está vacío</div>
                <Button className='mt-3' href="/">Ver productos</Button>
            </div>
        )
    }
}

export default ItemListContainer