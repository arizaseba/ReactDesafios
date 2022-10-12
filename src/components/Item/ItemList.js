import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { getItems } from '../app/dbProducts';
import Item from './Item';
import { PulseLoader } from 'react-spinners';

function ItemList({ category }) {
    const [isLoading, setIsLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    const [orden, setOrden] = useState("title");
    const [sentido, setSentido] = useState("asc");

    const handleChange = (e) => {
        setOrden(e.target[e.target.selectedIndex].attributes.orden?.value)
        setSentido(e.target[e.target.selectedIndex].attributes.sentido?.value)
    }

    useEffect(() => {
        getItems(orden, sentido)
            .then((data) => {
                if (category)
                    setProductos(data.filter(s => s.category.toLowerCase() === category.toLowerCase()))
                else
                    setProductos(data)
                setIsLoading(false);
            });
    }, [category, orden, sentido]);

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
            <>
                <Form.Label>Ordenar por...</Form.Label>
                <Form.Select className='mb-3' onChange={handleChange}>
                    <option orden="title" sentido="asc"></option>
                    <option orden="price" sentido="desc">Mayor precio</option>
                    <option orden="price" sentido="asc">Menor precio</option>
                </Form.Select>

                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {listItems}
                </Row>
            </>
        )
    }
}

export default ItemList