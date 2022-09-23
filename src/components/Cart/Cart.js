import React from 'react'
import { Button } from 'react-bootstrap';

const Cart = () => {

    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='display-4'>Tu carrito está vacío</div>
            <Button className='mt-3' href="/">Ver productos</Button>
        </div>
    )
}

export default Cart