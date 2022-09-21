import React, { useEffect, useState } from 'react'
import { getItem, getProducts } from './app/api';
import ItemDetail from './Products/ItemDetail'
import { PulseLoader } from 'react-spinners';

const ItemDetailContainer = ({ onAdd: addItem }) => {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState(null);

    useEffect(() => {
        getProducts
            .then((response) => response)
            .then((data) => {
                setProductos(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <PulseLoader className="position-absolute top-50 start-50 translate-middle" color="#212529"/>
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