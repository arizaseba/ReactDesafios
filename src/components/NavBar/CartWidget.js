import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import ItemListContainer from './ItemListContainer';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CartWidget = ({ countItems }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className="me-2">
                <FontAwesomeIcon icon={faCartShopping} /> {countItems}
            </Button>
            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ItemListContainer productItem={countItems} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartWidget