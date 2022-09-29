import React, { useContext, useState } from 'react'
import { Button, Container, Modal, Toast, ToastContainer } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { getItem } from '../app/api';
import '../../css/ItemDetail.css';
import ItemCount from './ItemCount';
import CartContext from '../Context/CartContext';

const ItemDetail = () => {
    // context
    const { addItemCart } = useContext(CartContext);

    // parametros
    const { id } = useParams();
    const item = getItem(parseInt(id));

    // contador para stock del item
    const [stock, setStock] = useState(item.stock)

    // mostrar mensaje "sin stock"
    const [showMsg, setShowMsg] = useState(false);
    const closeMsg = () => setShowMsg(false);
    const openMsg = () => setShowMsg(true);

    // mostrar mensaje "agregado al carrito"
    const [showToast, setShowToast] = useState(false);
    const closeToast = () => setShowToast(false);
    const openToast = () => setShowToast(true);

    // imagen principal
    const [image, setImage] = useState(item.img[0]);

    // contador para cantidad de items a agregar
    const [count, setCount] = useState(1);

    return (
        <Container className='my-4'>
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
                    Detalle: <ul className=''>{item.desc.map((desc, ix) => <li key={ix}>{desc}</li>)}</ul>

                    <div className="thumb">
                        {item.img.map((img, ix) => (
                            <img className={image.src === img.src ? "active" : ""} key={ix} src={img.src} alt={img.alt} onMouseOver={() => setImage(img)}></img>
                        ))}
                    </div>
                    <ItemCount item={item} count={count} setCount={setCount} />
                    <Button variant='outline-info'
                        onClick={() => {
                            if (item.stock > 0 && count <= item.stock) {
                                setStock(stock - count);
                                item.minStock(count);
                                console.log(item.title + " - Stock: " + item.stock);
                                addItemCart(item, count);
                                openToast();
                            }
                            else {
                                openMsg();
                            }
                        }}>
                        <MdAddShoppingCart size={25}/> Agregar al carrito
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
        </Container>
    )
}

export default ItemDetail