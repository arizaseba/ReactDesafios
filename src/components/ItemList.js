import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { getProducts } from './app/api';
import Item from './Item';

function ItemList({ onAdd: addItem }) {
    const listItems = getProducts().map(p =>
        <Col key={p.id}>
            <Item item={p} onAdd={addItem} />
        </Col>
    );

    return (
        <Row xs={1} md={3} lg={4} className="g-4">
            {listItems}
        </Row>
    )
}

export default ItemList