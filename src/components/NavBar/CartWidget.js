import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md'
import { Button, Offcanvas } from 'react-bootstrap';
import ItemListContainer from './ItemListContainer';

function CartWidget({ productList }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className="my-2 d-flex align-items-center">
                <MdShoppingCart /> 
                <div id="cart_count" className='ms-2'>{productList.length}</div>
            </Button>
            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ItemListContainer productList={productList} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartWidget