import React, { useState } from 'react'
import { Button, Modal, Toast, ToastContainer } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { addToCart, getItem } from '../app/api';
import '../../css/ItemDetail.css';
import ItemCount from './ItemCount';

const ItemDetail = () => {
    const { id } = useParams();
    const item = getItem(parseInt(id));

    const [stock, setStock] = useState(item.stock);

    const [showMsg, setShowMsg] = useState(false);
    const closeMsg = () => setShowMsg(false);
    const openMsg = () => setShowMsg(true);

    const [showToast, setShowToast] = useState(false);
    const closeToast = () => setShowToast(false);
    const openToast = () => setShowToast(true);

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
                            <img className={image.src === img.src ? "active" : ""} key={ix} src={img.src} alt={img.alt} onMouseOver={() => setImage(img)}></img>
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
                                openToast();
                            }
                            else {
                                openMsg();
                            }
                        }}                        >
                        <MdAddShoppingCart /> Agregar al carrito
                    </Button>
                </div>
            </div>

            <Modal show={showMsg} onHide={closeMsg}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Lo siento, la cantidad a comprar debe ser menor que el stock del artículo</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeMsg}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>


            <ToastContainer className="p-3" position="top-end" containerPosition="fixed">
                <Toast bg='light' animation onClose={() => closeToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header closeButton={true}>
                        <strong className="me-auto text-uppercase">{item.title}</strong>
                    </Toast.Header>
                    <Toast.Body>¡Producto agregado al carrito de compras!</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default ItemDetail