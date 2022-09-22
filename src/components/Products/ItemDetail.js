import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { addToCart, getItem } from '../app/api';
import '../../css/ItemDetail.css';
import ItemCount from './ItemCount';

const ItemDetail = () => {
    const { id } = useParams();
    const item = getItem(parseInt(id));

    const [stock, setStock] = useState(item.stock);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const descItem = item.desc.map((desc, ix) => <li key={ix}>{desc}</li>)

    const [image, setImage] = useState(item.img[0]);

    const [count, setCount] = useState(1);

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
                    Detalle: <ul className=''>{descItem}</ul>

                    <div className="thumb">
                        {item.img.map((img, ix) => (
                            <img key={ix} src={img.src} alt={img.alt} onClick={() => setImage(img)}></img>
                        ))}
                    </div>
                    <ItemCount item={item} count={count} setCount={setCount} />
                    <Button style={{ width: 200 }}
                        onClick={() => {
                            if (item.stock > 0 && count <= item.stock) {
                                setStock(stock - count);
                                item.minStock(count);
                                console.log(item.title + " - Stock: " + item.stock);
                                addToCart(item, count);
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
                <Modal.Body>Lo siento, la cantidad a comprar debe ser menor que el stock del artículo</Modal.Body>
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