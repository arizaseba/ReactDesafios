import React, { useContext, useEffect } from 'react'
import { Button, Form, FormLabel, InputGroup, ListGroup } from 'react-bootstrap';
import CartContext from '../Context/CartContext';

const Cart = () => {
    const { cartItems, removeItemCart, addItemCart, clearCart } = useContext(CartContext);

    useEffect(() => {
        return () => {
            (cartItems.reduce((sum, obj) => sum + (obj.price * obj.amount), 0))
        };
    }, [cartItems])

    const listItems = cartItems.map((p, index) =>
        <ListGroup.Item key={index} as="li">
            <div className="row align-items-center">
                <div className="col-2">
                    <img src={p.img[0].src} alt={p.img[0].alt} style={{ width: 150 }} />
                </div>
                <div className="col-5 d-flex flex-column">
                    <h5 className='text-uppercase'>{p.title}</h5>
                    <Form.Text>Color: {p.color}</Form.Text>
                    <p role="button" onClick={() => {
                        removeItemCart(p, p.amount)
                        cartItems.reduce((sum, obj) => sum + (obj.price * obj.amount), 0)
                    }}>Eliminar
                    </p>
                </div>
                <div className="col-2 d-flex flex-column align-items-center">
                    <InputGroup className='d-flex justify-content-center'>
                        <Button variant="dark" id="button-min" onClick={() => { removeItemCart(p, 1); cartItems.reduce((sum, obj) => sum + (obj.price * obj.amount), 0) }}>-</Button>
                        <FormLabel className="border d-flex align-items-center justify-content-center m-0 px-4">{p.amount}</FormLabel>
                        <Button variant="dark" id="button-add" onClick={() => { p.stock > 0 && addItemCart(p, 1); cartItems.reduce((sum, obj) => sum + (obj.price * obj.amount), 0) }}>+</Button>
                    </InputGroup>
                    <Form.Text className="text-muted">{p.stock} disponibles</Form.Text>
                </div>
                <div className="col-3 text-end">
                    <span className='fs-2 fw-light'>$ {parseInt(p.price * p.amount).toLocaleString()}</span>
                </div>
            </div>
        </ListGroup.Item>
    );

    if (cartItems.length > 0) {
        return (
            <ListGroup variant="flush">
                {listItems}
                <ListGroup.Item as="li" className='my-4'>
                    <div className="row display-6 fw-bold">
                        <div className="col-9 text-end">
                            <p>Total</p>
                        </div>
                        <div className="col-3 text-end">
                            <p>$ {parseInt(cartItems.reduce((sum, obj) => sum + (obj.price * obj.amount), 0)).toLocaleString()}</p>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='d-flex flex-row justify-content-end'>.
                    <Button variant="dark" className='mx-3' onClick={() => { clearCart() }}>Vaciar carrito</Button>
                    <Button variant="success">Finalizar compra</Button>
                </ListGroup.Item>
            </ListGroup>
        )
    } else {
        return (
            <div className='d-flex flex-column align-items-center justify-content-center text-center' style={{ height: 500 }}>
                <div className='display-5'>Tu carrito está vacío</div>
                <div className='fs-4 text-muted'>¿No sabés qué comprar? ¡Contactanos para asesorarte!</div>
                <div className='d-inline mt-4'>
                    <Button className='mx-2' href="/contact" variant="dark">Contacto</Button>
                    <Button className='mx-2' href="/" variant="success">Ver productos</Button>
                </div>
            </div>
        )
    }
}

export default Cart