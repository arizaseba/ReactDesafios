import React, { useContext, useEffect } from 'react'
import { Button, Form, FormLabel, InputGroup, ListGroup } from 'react-bootstrap';
import CartContext from '../Context/CartContext';

const Cart = () => {
    const { cartItems, removeItemCart, addItemCart } = useContext(CartContext);

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
                <div className="col-2 text-center">
                    <InputGroup style={{ width: 150 }}>
                        <Button style={{ width: 40 }} variant="primary" id="button-min" onClick={() => {
                            removeItemCart(p, 1)
                            cartItems.reduce((sum, obj) => sum + (obj.price * obj.amount), 0)
                        }}>-</Button>
                        <FormLabel className="border d-flex align-items-center justify-content-center m-0" style={{ width: 70, height: 38 }}>{p.amount}</FormLabel>
                        <Button style={{ width: 40 }} variant="primary" id="button-add" onClick={() => {
                            p.stock > 0 && addItemCart(p, 1)
                            cartItems.reduce((sum, obj) => sum + (obj.price * obj.amount), 0)
                        }}>+</Button>
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
                <ListGroup.Item as="li">
                    <div className="row align-items-center">
                        <div className="col-10 text-end">
                            <p className='fs-2'>Total</p>
                        </div>
                        <div className="col-2 text-end">
                            <p className='fs-2'>$ {parseInt(cartItems.reduce((sum, obj) => sum + (obj.price * obj.amount), 0)).toLocaleString()}</p>
                        </div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        )
    } else {
        return (
            <div className='d-flex flex-column align-items-center' >
                <div className='display-4'>Tu carrito está vacío</div>
                <Button className='mt-3' href="/">Ver productos</Button>
            </div>
        )
    }
}

export default Cart