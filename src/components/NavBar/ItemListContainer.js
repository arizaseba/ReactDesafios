import React from 'react'
import { ListGroup } from 'react-bootstrap';

function ItemListContainer({ productList }) {
    const listItems = productList.map((p,) =>
        <ListGroup.Item key={p.id}>
            {p.name}
        </ListGroup.Item>);

    return (
        <ListGroup variant="flush">{listItems}</ListGroup>
    )
}

export default ItemListContainer