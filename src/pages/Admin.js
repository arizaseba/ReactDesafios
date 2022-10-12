import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap"
import { createItem, getItems } from "../components/app/dbProducts"

// pagina para subir productos
const Admin = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        return () => {
            getItems("title", "asc").then(data => setProducts(data))
        }
    }, [])

    const [item, setItem] = useState({
        title: "",
        color: "",
        stock: 0,
        img: [],
        price: 0,
        desc: [],
        category: ""
    })

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.clear()

        // array de descripción del producto
        const desc = []
        item.desc.length > 0 && item.desc.split("\n").forEach(d => {
            desc.push(d.trim())
        })
        item.desc = desc;

        // array de imagenes del producto
        const img = []
        item.img.length > 0 && item.img && item.img.split("\n").forEach(i => {
            img.push({ src: i.trim(), alt: item.title })
        })
        item.img = img;

        console.log(item)

        createItem(item);
    }

    if (products) {
        return (
            <Container fluid className='my-4'>
                <Container>
                    <h3>Agregar Item</h3>
                    <hr />
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control name="title" type="text" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Color</Form.Label>
                                    <Form.Control name="color" type="text" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Categoría</Form.Label>
                                <Form.Select name="category" onChange={handleChange} >
                                    <option>gamer</option>
                                    <option>office</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control name="stock" type="number" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control name="price" type="number" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Imagenes (URL)</Form.Label>
                                    <Form.Control name="img" as="textarea" rows={5} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Detalle</Form.Label>
                                    <Form.Control name="desc" as="textarea" rows={5} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button onClick={handleSubmit}>Agregar Producto</Button>
                    </Form>

                </Container>






                {/* <Button onClick={() => {
                    getItems().then(data => data.forEach(item => {
                        deleteItem(item.id)
                    }))

                    getItems().then(data => console.log(data))
                }
                }>BORRAR ITEMS</Button> */}

                <Table className="my-5" striped bordered size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>title</th>
                            <th>color</th>
                            <th>stock</th>
                            <th>img</th>
                            <th>price</th>
                            <th>desc</th>
                            <th>category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((i) => (
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.color}</td>
                                <td>{i.stock}</td>
                                <td>{i.img.map((s, ix) => (<img key={ix} src={s.src} alt={s.alt} style={{ height: 75 }} />))}</td>
                                <td>{i.price}</td>
                                <td>{i.desc.map((s, ix) => (<li key={ix}>{s}</li>))}</td>
                                <td>{i.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Container >
        )
    }
}

export default Admin