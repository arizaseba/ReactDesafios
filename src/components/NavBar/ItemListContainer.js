import React from 'react'
import { ListGroup } from 'react-bootstrap';

function ItemListContainer({ cartList }) {
    const listItems = cartList.map((p, index) =>
        <ListGroup.Item key={index} as="li" className="d-flex justify-content-between align-items-start">
            {p.item.title} - Color: {p.item.color}
        </ListGroup.Item>
    );

    return (
        <ListGroup variant="flush">{listItems}</ListGroup>
    )
}

export default ItemListContainer