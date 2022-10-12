import React, { useContext, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md'
import { Button, Modal } from 'react-bootstrap';
import CartDetail from './CartDetail';
import CartContext from '../Context/CartContext';


function CartWidget() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { cartItems, clearCart } = useContext(CartContext);

    return (
        <>
            <Button onClick={handleShow} className="my-2 d-flex align-items-center">
                <MdShoppingCart size={"1rem"} />
                <div id="cart_count" className="ms-2">{cartItems && cartItems.length}</div>
            </Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CartDetail show={show} handleClose={handleClose} />
                </Modal.Body>
                <Modal.Footer>
                    {
                        cartItems.length > 0 ?
                            <>
                                <div className='row'>
                                    <Button variant="dark" onClick={clearCart}>Vaciar carrito</Button>
                                </div><div className='row'>
                                    <Button href="/cart" variant="success">Comprar</Button>
                                </div>
                            </> :
                            <>
                                <div className='row'>
                                    <Button href="/contact" variant="dark">Contacto</Button>
                                </div><div className='row'>
                                    <Button href="/" variant="success">Ver productos</Button>
                                </div>
                            </>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CartWidget