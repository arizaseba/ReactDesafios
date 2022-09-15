import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { getItem, getProducts } from './app/api';
import ItemDetail from './Products/ItemDetail'

const ItemDetailContainer = ({ onAdd: addItem }) => {
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
        return (
            productos.map((p, index) =>
                <ItemDetail key={index} onAdd={addItem} item={getItem(p.id)} />
            )
        )
    }
}

export default ItemDetailContainer