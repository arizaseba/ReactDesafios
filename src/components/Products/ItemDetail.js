import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { addToCart, getItem } from '../app/api';
import '../../css/ItemDetail.css';

const ItemDetail = () => {
    const { id } = useParams();
    const item = getItem(parseInt(id));

    const [count, setCount] = useState(item.stock);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const descItem = item.desc.map((desc, ix) => <li key={ix}>{desc}</li>)

    const [image, setImage] = useState(item.img[0]);

    return (
        <>
            <div className="details border rounded-4 shadow-lg">
                <div className="big-img">
                    <img src={image.src} alt={image.alt} />
                </div>
                <div className="box">
                    <div className="row">
                        <h2>{item.title}</h2>
                        <h3 className="display-4">$ {parseFloat(item.price).toLocaleString()}</h3>
                    </div>
                    <p>Color: {item.color}</p>
                    <p>Stock: {item.stock}</p>
                    Detalle: <ul className=''>{descItem}</ul>

                    <div className="thumb">
                        {item.img.map((img, ix) => (
                            <img key={ix} src={img.src} alt={img.alt} onClick={() => setImage(img)}></img>
                        ))}
                    </div>
                    <Button className='text-center mt-2'
                        onClick={() => {
                            if (item.stock > 0) {
                                setCount(count - 1);
                                item.minStock(1);
                                console.log(item.title + " - Stock: " + item.stock);
                                // setItem(item + 1)
                                addToCart(item);
                            }
                            else {
                                handleShow();
                            }
                        }}>
                        <MdAddShoppingCart /> Agregar al carrito
                    </Button>
                </div>
            </div>

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