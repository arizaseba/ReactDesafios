import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { getProducts } from '../app/api';
import Item from './Item';
import { PulseLoader } from 'react-spinners';

function ItemList({ addItem, category }) {
    const [isLoading, setIsLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts
            .then((response) => response)
            .then((data) => {
                if (category)
                    setProductos(data.filter(s => s.category.toLowerCase() === category.toLowerCase()))
                else
                    setProductos(data)
                setIsLoading(false);
            });
    }, [category]);

    if (isLoading) {
        return (
            <PulseLoader className="position-absolute top-50 start-50 translate-middle" color="#212529" />
        );
    }
    else {
        // console.log("Categoria: " + category)
        // console.log(productos);
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