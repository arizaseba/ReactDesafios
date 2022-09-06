import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md'
import { Button, Offcanvas } from 'react-bootstrap';
import ItemListContainer from './ItemListContainer';

function CartWidget(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className="my-2">
                <MdShoppingCart /> {props.productList.length}
            </Button>
            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ItemListContainer productList={props.productList} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartWidget