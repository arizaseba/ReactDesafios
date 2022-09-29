import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { getProducts } from '../app/api';
import Item from './Item';
import { PulseLoader } from 'react-spinners';

function ItemList({ category }) {
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
            <Container className='d-flex align-items-center justify-content-center' style={{ height: 500 }}>
                <PulseLoader color="#202020" />
            </Container>
        );
    }
    else {
        // console.log("Categoria: " + category)
        // console.log(productos);
        const listItems = productos.map(p =>
            <Col key={p.id}>
                <Item item={p} />
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