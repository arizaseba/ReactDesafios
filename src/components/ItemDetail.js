import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md';

const ItemDetail = ({ item, onAdd }) => {
    const [count, setCount] = useState(item.stock);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className='d-flex flex-row align-items-center my-3'>
                <Card.Img variant="top" src={item.img} className="w-25" />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className='display-6'>$ {item.price}</Card.Text>
                    <Card.Text>Descripción: {item.desc}</Card.Text>
                    <Card.Text>Color: {item.color}</Card.Text>
                    <Card.Text>Stock: {item.stock}</Card.Text>
                    <Button className='text-center'
                        onClick={() => {
                            if (item.stock > 0) {
                                setCount(count - 1);
                                item.minStock(1);
                                console.log(item.title + " - Stock: " + item.stock);
                                // setItem(item + 1)
                                onAdd(item);
                            }
                            else {
                                handleShow();
                            }
                        }}>
                        <MdAddShoppingCart /> Agregar al carrito
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Lo siento, nos hemos quedado sin stock</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ItemDetail