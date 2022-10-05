import { Button, Card } from 'react-bootstrap'
import { MdArticle } from 'react-icons/md';

function Item({ item }) {
    return (
        <Card className='shadow p-2' style={{ height: 600 }}>
            <div className='overflow-hidden'>
                <a href={`/item/${item.id}`}>
                    <Card.Img style={{ height: 350, objectFit: "contain" }} variant="top" src={item.img[0].src} alt={item.img[0].alt} />
                </a>
            </div>
            <Card.Body className='d-flex flex-column text-center'>
                <Card.Title className='mb-auto'>{item.title}</Card.Title>
                <Card.Text className='display-6'>$ {parseFloat(item.price).toLocaleString()}</Card.Text>
                <Button href={`/item/${item.id}`}>
                    <MdArticle size={"1rem"} /> Detalles
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Item