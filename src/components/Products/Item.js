import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { MdArticle } from 'react-icons/md';

function Item({ item }) {
    return (
        <Card className='shadow p-2' style={{ height: 600}}>
            <div className='overflow-hidden'>
                <Card.Img style={{ height: 400, objectFit: "cover" }} variant="top" src={item.img[0].src} alt={item.img[0].alt} />
            </div>
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className='display-6'>$ {parseFloat(item.price).toLocaleString()}</Card.Text>
                <Button className='text-center' href={`/item/${item.id}`}>
                    <MdArticle /> Detalles
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Item