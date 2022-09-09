import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md'
import { Button, Modal } from 'react-bootstrap';
import ItemListContainer from './ItemListContainer';

function CartWidget({ cartList }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className="my-2 d-flex align-items-center">
                <MdShoppingCart />
                <div id="cart_count" className='ms-2'>{cartList.length}</div>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ItemListContainer cartList={cartList} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Comprar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CartWidget