import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap';

function ItemListContainer({ cartList }) {
    const listItems = cartList.map((p, index) =>
        <ListGroup.Item key={index} as="li" className="d-flex justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
                <img src={p.img[0].src} alt={p.img[0].alt} style={{ width: 100 }} />
                <div className='d-flex flex-column '>
                    <span>{p.title}</span>
                    <span>Color: {p.color}</span>
                </div>
            </div>
            <Badge bg="primary">{p.cantidad}</Badge>
        </ListGroup.Item>
    );

    return (
        <ListGroup variant="flush">{listItems}</ListGroup>
    )
}

export default ItemListContainer