import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';

function ItemCount({ stock, initial, onAdd }) {
    const [item, setItem] = useState(initial);

    return (
        <>
            <Container className="my-3">
                <Button
                    onClick={() => {
                        if (item <= stock) {
                            setItem(item + 1)
                            onAdd(item);
                        }
                        else {
                            console.log("Sin stock");
                        }
                    }}
                >
                    <MdAddShoppingCart /> Agregar al carrito
                </Button>
            </Container>
        </>
    )
}

export default ItemCount