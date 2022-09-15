import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { MdArticle } from 'react-icons/md';

function Item({ item }) {
    return (
        <Card>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className='display-6'>$ {item.price}</Card.Text>
                <Button className='text-center' href={`/item/${item.id}`}>
                    <MdArticle /> Detalles
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Item