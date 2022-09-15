import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap';
import { getProducts } from '../app/api';
import Item from './Item';

function ItemList({ onAdd: addItem }) {

    const [isLoading, setIsLoading] = useState(true);
    const [productos, setProductos] = useState(null);

    useEffect(() => {
        getProducts
            .then((response) => response)
            .then((data) => {
                setProductos(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <Spinner animation="border" />
        );
    }
    else {
        const listItems = productos.map(p =>
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
}

export default ItemList