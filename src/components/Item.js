import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md';

function Item({ item, onAdd }) {
    const [count, setCount] = useState(item.stock);

    return (
        <Card className="align-content-center">
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className='display-6'>$ {item.price}</Card.Text>
                <Card.Text>Color: {item.color}</Card.Text>
                <Card.Text>Stock: {item.stock}</Card.Text>
                <Button
                    onClick={() => {
                        if (item.stock > 0) {
                            setCount(count - 1)
                            item.minStock(1)
                            console.log(item.title + " - Stock: " + item.stock)
                            // setItem(item + 1)
                            onAdd(item)
                        }
                        else {
                            console.log("Sin stock")
                        }
                    }}
                >
                    <MdAddShoppingCart /> Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Item